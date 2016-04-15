'use strict';
var express = require('express'),
    router = express.Router();
var config = require('../../config/config.js');
var jwt_verify = require('../../middleware/jwt_verify.js');
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;

// !! route = '/votes'

// ###########  POSTS  ###############
// Post vote for issue
router.post('/create', jwt_verify, function(req, res) {
    var user = req.decoded;
    var info = req.body;
    var queryString = `
        SELECT
            _id, vote_type_id
        FROM
            votes
        WHERE
            post_id = $1
        AND
            user_id = $2;`;
    var queryParams = 
        [info.thing_id, user.id];
    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        client.query(queryString, queryParams, function(err, result) {
            if (err) throw err;
            console.log('RESULT: ', result.rows);
            var newQuery;
            var newParams;
            var modAmount;
            if(result.rows.length === 0){
                newQuery = `
                INSERT INTO votes
                    (post_id, user_id, created_at, vote_type_id)
                VALUES 
                    (  $1,       $2,      $3,           $4);`;
                newParams = 
                    [info.thing_id, user.id, new Date, info.vote_type_id];
                switch(info.vote_type_id){
                    case 1:
                        modAmount = +1;
                        break;
                    case 2:
                        modAmount = -1;
                        break;
                }
            }else{
                newQuery = `
                UPDATE
                    votes
                SET 
                    vote_type_id = $2
                WHERE
                    _id = $1;`;
                var newVoteType;

                // Check if the vote type is the one stored...
                //      We are undoing a vote and setting neutral;
                if(info.vote_type_id === result.rows[0].vote_type_id){
                    switch(info.vote_type_id){
                        case 1:
                            modAmount = -1;
                            break;
                        case 2:
                            modAmount = +1;
                            break;
                    }
                    newVoteType = 3;
                }else{
                    // Checking when the vote is different than the one is stored
                    /*
                               CHECK TABLE
                        --------------------------
                        STORED  1     2     3
                        SENT    1 X   1 +2  1 +1
                        SENT    2 -2  2 X   2 -1

                    */
                    var stored = result.rows[0].vote_type_id;
                    var sent = info.vote_type_id;
                    console.log('SENT: ', sent);
                    console.log('STORED: ', stored);
                    switch(stored){
                        case 1:
                            modAmount = -2;
                            break;
                        case 2:
                            modAmount = +2;
                            break;
                        case 3:
                            if(sent === 1)
                                modAmount = +1;
                            else
                                modAmount = -1;
                            break;
                    }
                    console.log('RESULT: ', modAmount);
                    newVoteType = info.vote_type_id
                }
                newParams = 
                    [result.rows[0]._id, newVoteType];
            }
            client.query(newQuery, newParams, function(err, newResult) {
                //call `done()` to release the client back to the pool
                done();
                if (err) throw err;
                res.status(200).send({modAmount: modAmount}).end();
            });
        });
    });
    
});
module.exports = router;