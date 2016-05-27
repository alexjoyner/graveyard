'use strict';
var express = require('express'),
    router = express.Router();
var config = require('../../config/config.js');
var jwt_verify = require('../../middleware/jwt_verify.js');
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;
// !! route = '/welcome'
//##############  POST ####################
router.post('/new', function(req, res) {
    //this initializes a connection pool
    //it will keep idle connections open for a (configurable) 30 seconds
    //and set a limit of 10 (also configurable)
    pg.connect(conString, function(err, client, doneConnect) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        var queryString = `
	        SELECT 
	            *
	        FROM welcome_users
	        WHERE
	            welcome_users.email = $1 
	        ;
	    `;
        client.query(queryString, [req.body.email], function(err, result) {
            if (err) return done(err);
            if (result.rows[0]) {
                res.status(500).send({
                    message: 'You are already registered with email ' + req.body.email + ' we will email you updates.'
                });
            } else {
                queryString = `
                        INSERT INTO 
                            welcome_users   
                            (full_name, email, interests)
                        VALUES      
                            ($1,$2, $3)
                        RETURNING
                            *
                        ;`;
                client.query(queryString, [req.body.fullName, req.body.email, req.body.interests], function(err, newUser) {
                    //call `done()` to release the client back to the pool
                    doneConnect();
                    if (err) throw err;
                    res.status(200).send({
                    	status: 'success'
                    });
                });
            }
        });
    });
})
module.exports = router;