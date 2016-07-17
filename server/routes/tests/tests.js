'use strict';
var express = require('express'),
    router = express.Router();
var config = require('../../config/config.js');
var jwt_verify = require('../../middleware/jwt_verify.js');
var sql_query = require('../../middleware/sql_query.js');
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;
// Special functions
var sortPosts = require('../../custFunctions/sortPosts.js');
// !! route = '/posts'
// ###########  GETS  ###############
// get all
router.get('/all',
    /*Query all questions
     1) Attach query string*/
    require('./queries/get_all_posts.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something
     with roInfo*/
    function(req, res) {
        req.roDone();
        var result = req.roInfo;
        if (!result.rows[0]) {
            res.status(200).send([]).end();
        } else {
            var sortedPosts = sortPosts(result.rows);
            res.status(200).send(sortedPosts).end();
        }
    });
router.get('/ping', function(req, res){
    console.log('You got me!');
    res.status(200).send({success: true}).end();
});



module.exports = router;