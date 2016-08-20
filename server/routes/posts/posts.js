'use strict';
var express = require('express'),
	router = express.Router();
var config = require('../../config/config.js');
var jwt_verify = require('../../middleware/jwt_verify.js');
var sql_query = require('../../middleware/sql_query.js');
var Q = require('q');
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;
// Special functions
var sortPosts = require('../../custFunctions/sortPosts'),
	getDB_Client = sql_query.getDB_Client; // Gets db client roConClient and roDone
var getPageContents = require('../../custFunctions/getPageContents');

// Core route functions
// Just include the function as middleware and don't call it,
// 		you should get the results in the next function as req.roReturned
var get_core_feed = require('./core_functions/get_core_feed');
var get_topic_feed = require('./core_functions/get_topic_feed');
var get_post_by_id = require('./core_functions/get_post_by_id');
var create_new_post = require('./core_functions/create_new_post');
var owner_follow_post = require('../follows/queries/insert_new_follow.js');
// !! route = '/posts'
// ###########  GETS  ###############
// get
router.get('/core-feeds/:feed_name/:page_num',
	/*Check cache*/
	function (req, res, next) {
		req['roPageNum'] = req.params['page_num'];
		var results = req.mtCache.get(req.params['feed_name'] + '_feed');
		if (!results) {
			return next();
		}
		console.log('FROM CACHE');
		res.status(200).send(getPageContents(req['roPageNum'], results, 25)).end();
	},
	getDB_Client,
	get_core_feed,
	function (req, res) {
		req.roDone
		res.status(200).send(getPageContents(req['roPageNum'], req.roReturned, 25)).end();
	});


// get all posts of tag
router.get('/topic/:tagId/:page_num',
	/*Check cache*/
	function (req, res, next) {
		req['roPageNum'] = req.params['page_num'];
		var results = req.mtCache.get('tag_feed_' + req.params['tagId']);
		if (!results) {
			next();
			return;
		}
		console.log('FROM CACHE');
		res.status(200).send(getPageContents(req['roPageNum'], results)).end();
	},
	getDB_Client,
	get_topic_feed,
	function (req, res) {
		req.roDone();
		res.status(200).send(getPageContents(req['roPageNum'], req.roReturned, 25)).end();
	});


router.get('/post/:id',
	/*Check cache*/
	function (req, res, next) {
		req['roPageNum'] = req.params['page_num'];
		var results = req.mtCache.get('tag_feed_' + req.params['tagId']);
		if (!results) {
			next();
			return;
		}
		console.log('FROM CACHE');
		res.status(200).send(getPageContents(req['roPageNum'], results)).end();
	},
	getDB_Client,
	get_post_by_id,
	function (req, res) {
		req.roDone();
		res.status(200).send(req.roReturned).end();
	});

router.get('/search/:type/:searchTerm',
	/*Get search data
	 1) Attach query string*/
	require('./queries/search_get_posts.js'),
	/*  2) Query the attached string*/
	sql_query.commonQuery,
	/*  3) Query was successful, do something
	 with roInfo*/
	function (req, res) {
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
	getDB_Client,
	create_new_post,
	function (req, res, next) {
		req.body['post_id'] = req.roReturned._id;
		req.postCreated = req.roReturned;
		next();
	},
	owner_follow_post,
	// /*  2) Query the attached string*/
	// sql_query.commonQuery,
	// function (req, res, next) {
	// 	res.status(200).send(req.roPostCreated).end();
	// 	next();
	// },
	// /*Query all questions
	//  1) Attach query string*/
	// require('./queries/get_all_questions.js'),
	// /*  2) Query the attached string*/
	// sql_query.commonQuery,
	/*  3) Query was successful, do something
	 with roInfo*/
	function (req, res) {
		req.roDone();
		// var result = req.roInfo;
		// var feed_name = req.params['feed_name'];
		// if (!result.rows[0]) {
		// 	console.error('Could not cache top and hot after new post, because I didn\'t get the posts');
		// }
		// var sortedPosts = sortPosts.hotSort(result.rows);
		// console.log('CACHING hot_feed');
		// mtCache.set('hot_feed', sortedPosts);
		// var sortedPosts = sortPosts.topSort(result.rows);
		// console.log('CACHING top_feed');
		// mtCache.set('top_feed', sortedPosts);
		res.status(200).send(req.postCreated).end();
	}
);
// router.post('/newPost',
// 	/*Validate token to route*/
// 	jwt_verify,
// 	/*Token valid: Get search data
// 	 1) Attach query string*/
// 	require('./queries/insert_new_post.js'),
// 	/*  2) Query the attached string*/
// 	sql_query.commonQuery,
// 	/*  3) Query was successful, do something
// 	 with roInfo*/
// 	function (req, res, next) {
// 		req.roPostCreated = req.roInfo.rows[0];
// 		console.log('Post Created: ', req.roPostCreated);
// 		var postInfo = req.body.post;
// 		if (postInfo.post_type_id === 1) {
// 			/*
// 			 The new post is a question, so we need to run the process of
// 			 adding tags to the post
// 			 */
// 			req.roSkipTags = true;
// 			req.roSkipNotify = true;
// 			next();
// 		} else {
// 			req.roSkipTags = true;
// 			req.roSkipNotify = false;
// 			next();
// 		}
// 	},
// 	/*
// 	 Process to add tags to the post
// 	 */
// 	require('./route_func/post_newPost/add_tags_to_post.js'),
// 	require('./route_func/post_newPost/notify_followers_new_post.js'),
// 	/* Owner of post always follows their own posts*/
// 	function (req, res, next) {
// 		req.body['post_id'] = req.roInfo.rows[0]._id;
// 		next();
// 	},
// 	require('../follows/queries/insert_new_follow.js'),
// 	/*  2) Query the attached string*/
// 	sql_query.commonQuery,
// 	function (req, res, next) {
// 		res.status(200).send(req.roPostCreated).end();
// 		next();
// 	},
// 	/*Query all questions
// 	 1) Attach query string*/
// 	require('./queries/get_all_questions.js'),
// 	/*  2) Query the attached string*/
// 	sql_query.commonQuery,
// 	/*  3) Query was successful, do something
// 	 with roInfo*/
// 	function (req) {
// 		req.roDone();
// 		var result = req.roInfo;
// 		var feed_name = req.params['feed_name'];
// 		if (!result.rows[0]) {
// 			console.error('Could not cache top and hot after new post, because I didn\'t get the posts');
// 		}
// 		var sortedPosts = sortPosts.hotSort(result.rows);
// 		console.log('CACHING hot_feed');
// 		mtCache.set('hot_feed', sortedPosts);
// 		var sortedPosts = sortPosts.topSort(result.rows);
// 		console.log('CACHING top_feed');
// 		mtCache.set('top_feed', sortedPosts);
//
// 	}
// );


router.post('/updatePost',
	jwt_verify,
	function (req, res, next) { //TODO: This needs to be reformatted to neaten up
		var queryString = require('./queries/update_post.js');
		var post = req.body;
		console.log(post);
		pg.connect(conString, function (err, client, done) {
			if (err) {
				return console.error('error fetching client from pool', err);
			}
			var updateParams = [post.title, post.detail, +post._id]
			console.log(updateParams);
			client.query(queryString, updateParams, function (err, result) {
				//call `done()` to release the client back to the pool
				done();
				if (err) throw err;
				res.status(200).send('UPDATED').end();
				next();
			});
		});
	},
	/*Query all questions
	 1) Attach query string*/
	require('./queries/get_all_questions.js'),
	/*  2) Query the attached string*/
	sql_query.commonQuery,
	/*  3) Query was successful, do something
	 with roInfo*/
	function (req) {
		req.roDone();
		var result = req.roInfo;
		var feed_name = req.params['feed_name'];
		if (!result.rows[0]) {
			console.error('Could not cache top and hot after new post, because I didn\'t get the posts');
		}
		var sortedPosts = sortPosts.hotSort(result.rows);
		console.log('CACHING hot_feed');
		mtCache.set('hot_feed', sortedPosts);
		var sortedPosts = sortPosts.topSort(result.rows);
		console.log('CACHING top_feed');
		mtCache.set('top_feed', sortedPosts);

	}
);
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
	function (req, res) {
		var result = req.roInfo;
		res.status(200).send(result.rows[0]).end();
	});
module.exports = router;