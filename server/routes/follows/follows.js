'use strict';
var express = require('express'),
    router = express.Router();
var jwt_verify = require('../../middleware/jwt_verify.js');
var sql_query = require('../../middleware/sql_query.js');
// !! route = '/follows'

// ###########  POSTS  ###############
// Post a new follow if not found
router.post('/follow',
    /*Validate token to route*/
    jwt_verify,
    /*Token valid: Get search data
     1) Attach query string*/
    require('./queries/insert_new_follow.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something
     with roInfo*/
    function(req, res) {
        req.roDone();
        var result = req.roInfo;
        res.status(200).send({'success': true}).end();
    });
// Delete follow to unfollow
router.delete('/unfollow/:userId/:postId',
    /*Validate token to route*/
    jwt_verify,
    /*Token valid: Get search data
     1) Attach query string*/
    require('./queries/delete_aka_unfollow.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something
     with roInfo*/
    function(req, res) {
        req.roDone();
        var result = req.roInfo;
        res.status(200).send({'success': true}).end();
    });
module.exports = router;