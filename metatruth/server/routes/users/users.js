'use strict';
var express = require('express'),
    router = express.Router();
var config = require('../../config/config.js');
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;

var jwt_verify = require('../../middleware/jwt_verify.js')

router.get('/profile', jwt_verify, function(req, res){
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
});

module.exports = router;