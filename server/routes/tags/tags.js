'use strict';
var express = require('express'),
    router = express.Router();
var config = require('../../config/config.js');
var jwt_verify = require('../../middleware/jwt_verify.js');
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;

// !! route = '/tags'

// ###########  GETS  ###############
// Get tags from a search
router.get('/:searchTerm/:type', function(req, res){
    console.log('Search: ', req.params.searchTerm);
    pg.connect(conString, function(err, client, done) {
      if(err) {
        return console.error('error fetching client from pool', err);
      }
      var queryString = `
        SELECT 
            *
        FROM 
            tags
        WHERE 
            tag_name
        ILIKE
            $1
        AND
            tag_type_id = $2
        LIMIT
            5
        ;
      `;
      client.query(queryString, ['%'+req.params.searchTerm+'%', +req.params.type], function(err, result) {
        //call `done()` to release the client back to the pool
        done();
        if (err) throw err;
        if (!result.rows[0]) {
            res.status(200).send([]).end();
        } else {
            res.status(200).send(result.rows).end();
        }
      });
    });
});
// ###########  POSTS  ###############
// Post a new tag if not found
router.post('/create', jwt_verify, function(req, res) {
    console.log('BODY: ', req.body);
    var user = req.decoded;
    var info = req.body;
    var queryString = `
        INSERT INTO
          tags (
          tag_name,
          tag_type_id)
        VALUES (
          $1, $2)
        RETURNING
            *`;
    console.log(info);
    var queryParams = 
    [info.tag_name, info.tag_type_id];
    console.log(queryParams);
    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query(queryString, queryParams, function(err, result) {
            //call `done()` to release the client back to the pool
            done();
            if(err) throw err;
            console.log(result.rows[0]);
            res.status(200).send(result.rows[0]).end();
        });
    });
});

module.exports = router;