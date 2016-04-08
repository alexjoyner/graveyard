'use strict';
var express = require('express'),
    router = express.Router();
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = "postgres://rosco:@localhost:5432/postgres";

var jwt_verify = require('../../middleware/jwt_verify.js')
// Mongoose models
var users = require('../../models/userModel.js');

router.get('/profile', jwt_verify, function(req, res){
    //this initializes a connection pool
    //it will keep idle connections open for a (configurable) 30 seconds
    //and set a limit of 10 (also configurable)
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      var queryString = `
        SELECT 
            *
        FROM users
        WHERE
            users.email = $1
        ;
      `;
      client.query(queryString, [req.decoded.email], function(err, result) {
        //call `done()` to release the client back to the pool
        done();
        if (err) throw err;
        if (!result.rows[0]) {
            res.status(500).send('no issues found').end();
        } else {
            res.status(200).send(result.rows[0]).end();
        }
      });
    });
	/*users.findOne({
        'local.email': req.decoded.email
    }, function(err, user) {
        if(err) throw err;
        if (!user) {
        	res.status(500).send('No user found').end();
        }
        res.status(200).send(user).end();
    });*/
});

module.exports = router;