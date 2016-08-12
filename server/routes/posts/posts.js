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
// Node Cache
var node_cache = require('node-cache');
var mtCache = new node_cache( { stdTTL: 100, checkperiod: 120 } );

function getPageContents(page, array){
    var perPage = 50;
    var startPos = ((page) - 1) * perPage;
    var endPos = startPos + perPage;
    return array.slice(startPos, endPos);
}
// !! route = '/posts'
// ###########  GETS  ###############
// get
router.get('/core-feeds/:feed_name/:page_num',
    /*Check cache*/
    function(req, res, next){
        console.log('Hello');
        req['roPageNum'] = req.params['page_num'];
        var results = mtCache.get(req.params['feed_name'] + '_feed');
        if(!results){
            next();
            return;
        }
        console.log('FROM CACHE');
        res.status(200).send(getPageContents(req['roPageNum'], results)).end();
    },
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
        var feed_name = req.params['feed_name'];
        if (!result.rows[0]) {
            res.status(200).send([]).end();
        }
        if(feed_name !== 'top' && feed_name !== 'hot'){
            res.status(500).send('No good feed name').end();
            return;
        }
        if(feed_name === 'hot')
            var sortedPosts = sortPosts.hotSort(result.rows);
        if(feed_name === 'top')
            var sortedPosts = sortPosts.topSort(result.rows);

        console.log('CACHING ' + feed_name);
        mtCache.set(feed_name + '_feed', sortedPosts);
        res.status(200).send(getPageContents(req['roPageNum'], sortedPosts)).end();
    });
// // get
// router.get('/top',
//     /*Query all questions
//         1) Attach query string*/
//     require('./queries/get_all_questions.js'),
//     /*  2) Query the attached string*/
//     sql_query.commonQuery,
//     /*  3) Query was successful, do something
//                 with roInfo*/
//     function(req, res) {
//         req.roDone();
//         var result = req.roInfo;
//         if (!result.rows[0]) {
//             res.status(200).send([]).end();
//         } else {
//             var sortedPosts = sortPosts.topSort(result.rows);
//             res.status(200).send(sortedPosts).end();
//         }
//     });
// get all
router.get('/topic/:tagId',
    /*Check cache*/
    function(req, res, next){
        var results = mtCache.get('tag_feed_' + req.params['tagId']);
        if(!results){
            next();
            return;
        }
        console.log('FROM CACHE');
        res.status(200).send(results).end();
    },
    /*Query all questions
        1) Attach query string*/
    require('./queries/get_topic_questions.js'),
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
            var sortedPosts = sortPosts.hotSort(result.rows);
            console.log('CACHING ' + 'tag_feed_' + req.params['tagId']);
            mtCache.set('tag_feed_' + req.params['tagId'], sortedPosts);
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
            var sortedPosts;
            if (result.rows[0].points === null) {
                sortedPosts = [];
            }else{
                sortedPosts = sortPosts.topSort(result.rows[0].points);
            }
            result.rows[0].points = sortedPosts;
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
        req.roPostCreated = req.roInfo.rows[0];
        console.log('Post Created: ', req.roPostCreated);
        var postInfo = req.body.post;
        if (postInfo.post_type_id === 1) {
            /*
                The new post is a question, so we need to run the process of
                adding tags to the post
            */
            req.roSkipTags = true;
            req.roSkipNotify = true;
            next();
        } else {
            req.roSkipTags = true;
            req.roSkipNotify = false;
            next();
        }
    },
    /*
        Process to add tags to the post
    */
    require('./route_func/post_newPost/add_tags_to_post.js'),
    require('./route_func/post_newPost/notify_followers_new_post.js'),
    /* Owner of post always follows their own posts*/
    function(req, res, next){
      req.body['post_id'] = req.roInfo.rows[0]._id;
        next();
    },
    require('../follows/queries/insert_new_follow.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    function(req, res){
        req.roDone();
        res.status(200).send(req.roPostCreated).end();
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
router.delete('/deletePost/:postId',
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