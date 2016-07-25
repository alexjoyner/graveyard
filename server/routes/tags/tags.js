'use strict';
var express = require('express'),
    router = express.Router();
var config = require('../../config/config.js');
var jwt_verify = require('../../middleware/jwt_verify.js');
var sql_query = require('../../middleware/sql_query.js');
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;
// !! route = '/tags'
// ###########  GETS  ###############
// Get tags from a search
router.get('/:searchTerm/:type',
    /*Get tags data
        1) Attach query string*/
    require('./queries/search_get_tags.js'),
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
// ###########  POSTS  ###############
// Post a new tag if not found
router.post('/create', 
    /*Validate token to route*/
    jwt_verify,
    /*Token valid: Get search data
        1) Attach query string*/
    require('./queries/insert_new_tag.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something 
                with roInfo*/
    function(req, res) {
        req.roDone();
        var result = req.roInfo;
        res.status(200).send(result.rows[0]).end();
});
// Add tag to post
router.post('/addToPost',
    /*Token valid: Get search data
        1) Attach query string*/
    require('./queries/add_tag_to_post.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something
                with roInfo*/
    function(req, res) {
        req.roDone();
        var result = req.roInfo;
        res.status(200).send({success: true}).end();
});

// ################### DELETES ####################
// Delete follow to unfollow
router.delete('/removeTagFromPost/:tagId/:postId',
    //1) Attach query string*/
    require('./queries/delete_aka_removeTag.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something
     with roInfo*/
    function(req, res) {
        req.roDone();
        res.status(200).send({'success': true}).end();
    });
module.exports = router;