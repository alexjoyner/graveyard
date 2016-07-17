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
    require('./queries/get_all_questions.js'),
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
// get one question by id and a type of yes/no
router.get('/post/:id',
    /*Get question data
        1) Attach query string*/
    require('./queries/get_question_info_by_id.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something 
                with roInfo*/
    function(req, res) {
        req.roDone();
        var result = req.roInfo;
        if (!result.rows[0]) {
            res.status(500).send('no question found').end();
        } else {
            if (result.rows[0].points === null) {
                result.rows[0].points = [];
            }
            res.status(200).send(result.rows[0]).end();
        }
    });
router.get('/search/:type/:searchTerm',
    /*Get search data
        1) Attach query string*/
    require('./queries/search_get_posts.js'),
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
            res.status(200).send(result.rows).end();
        }
    });
// ###########  POSTS   ###############
// post new question
router.post('/newPost',
    /*Validate token to route*/
    jwt_verify,
    /*Token valid: Get search data
        1) Attach query string*/
    require('./queries/insert_new_post.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something 
                with roInfo*/
    function(req, res, next) {
        var postInfo = req.body.post;
        if (postInfo.post_type_id === 1) {
            /*
                The new post is a question, so we need to run the process of
                adding tags to the post
            */
            req.roSkipTags = false;
            next();
        } else {
            req.roSkipTags = true;
            next();
        }
    },
    /*
        Process to add tags to the post
    */
    require('./route_func/post_newPost/add_tags_to_post.js'),
    require('./route_func/post_newPost/notify_followers_new_post.js'),
    function(req, res){
        var result = req.roInfo;
        req.roDone();
        res.status(200).send(result.rows[0]).end();
    }
);



router.post('/updatePost', jwt_verify, function(req, res) { //TODO: This needs to be reformatted to neaten up
    var queryString = require('./queries/update_post.js');
    var post = req.body;
    console.log(post);
    pg.connect(conString, function(err, client, done) {
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        var updateParams = [post.title, post.detail, +post._id]
        console.log(updateParams);
        client.query(queryString, updateParams, function(err, result) {
            //call `done()` to release the client back to the pool
            done();
            if (err) throw err;
            res.status(200).send('UPDATED').end();
        });
    });
});
// post update to existing question
// ###########  DELETES  ###############
// delete existing post
router.delete('/deletePost/:postId/:questionId/:mainPointType',
    /*Validate token to route*/
    jwt_verify,
    /*Token valid: Get search data
        1) Attach query string*/
    require('./queries/delete_post_by_id.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something 
                with roInfo*/
    function(req, res) {
        var result = req.roInfo;
        res.status(200).send(result.rows[0]).end();
    });
module.exports = router;