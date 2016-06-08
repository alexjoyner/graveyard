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
    /*Validate token to route*/
    jwt_verify,
    /*Token valid: Query all questions
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
    /*Validate token to route*/
    jwt_verify,
    /*Token valid: Get question data
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
    /*Validate token to route*/
    jwt_verify,
    /*Token valid: Get search data
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
            next();
        } else {
            req.roDone();
            var result = req.roInfo;
            var postData = result.rows[0];
            var type;
            if (postInfo.post_type_id === 2) {
                type = (postInfo.point_type_id === 1) ? 'yes' : 'no';
                req.io.to('question' + result.rows[0].parent_id).emit('NewPost', postData)
            } else
            if (postInfo.post_type_id === 3) {
                type = postInfo.correspond_main_point_type_id;
                console.log('New support: ', 'question' + postInfo.question_id + '/' + type);
                req.io.to('question' + postInfo.question_id).emit('NewPost', postData)
            }
            res.status(200).send({
                success: true
            }).end();
        }
    },
    /*
        Process to add tags to the post
    */
    require('./route_func/post_newPost/add_tags_to_post.js'));



router.post('/updatePost', jwt_verify, function(req, res) {
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
        // Catch incoming VARS if undefined
        var input_questionId = +req.params.questionId;
        var input_mainPointType = (req.params.mainPointType === 'undefined') ? undefined : req.params.mainPointType;
        //call `done()` to release the client back to the pool
        req.roDone();
        var postDeleted = result.rows[0];
        var mainPointType;
        var pointTypeFromId;
        var question_id,
            support_id,
            main_point_id;
        // Catch point type if deleted a main point
        if (postDeleted.post_type_id === 2) {
            pointTypeFromId = (+postDeleted.point_type_id === 1) ? 'yes' : 'no';
        }
        switch (postDeleted.post_type_id) {
            case 1: // Question
                question_id = postDeleted._id;
                main_point_id = null;
                support_id = null;
                mainPointType = null;
                break;
            case 2: // Main Point
                question_id = postDeleted.parent_id;
                main_point_id = postDeleted._id;
                support_id = null;
                mainPointType = pointTypeFromId;
                break;
            case 3: // Support Point
                question_id = input_questionId;
                main_point_id = postDeleted.parent_id;
                support_id = postDeleted._id;
                mainPointType = input_mainPointType;
                break;
        }
        // Emit template for all types
        var emitPayload = {
            post_type_id: postDeleted.post_type_id,
            owner_user_id: postDeleted.owner_user_id,
            question_id: question_id,
            main_point_id: main_point_id,
            support_id: support_id,
            main_point_type: mainPointType
        }
        console.log('Main point type: ' + mainPointType);
        console.log('Payload: ', JSON.stringify(emitPayload));
        // Deleted a support point or main point
        if (mainPointType !== null) {
            // Notify just the people looking at the main cooresponing
            //    main point type half of the question
            req.io.to('question' + question_id).emit('DeletedPost', emitPayload);
        } else { // Deleted an question
            // Notify everyone on questions page
            req.io.to('questions').emit('DeletedQuestion', {
                _id: postDeleted._id
            });
            // Notify everyone looking at the question
            req.io.to('question' + question_id).emit('DeletedPost', emitPayload);
        }
        res.status(200).send('DELETED').end();
    });
module.exports = router;