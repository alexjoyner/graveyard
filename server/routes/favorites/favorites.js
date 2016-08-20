'use strict';
var express = require('express'),
    router = express.Router();
var jwt_verify = require('../../middleware/jwt_verify.js');
var sql_query = require('../../middleware/sql_query.js');
// !! route = '/favorites'
// ###########  GET ################ // TODO: Message for tommorow.  Get all the favoriteing / votes / favorite tags when user logs in
router.get('/my',
    /*Validate token to route*/
    jwt_verify,
    /*Token valid: Get search data
     1) Attach query string*/
    require('./queries/get_my_favorites.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something
     with roInfo*/
    function(req, res) {
        req.roDone();
        var result = req.roInfo;
        res.status(200).send(result.rows).end();
    });
// ###########  POSTS  ###############
// Post a new favorite if not found
router.post('/create',
    jwt_verify,
    /*Token valid: Get search data
     1) Attach query string*/
    require('./queries/insert_new_favorite.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something
     with roInfo*/
    function(req, res) {
        req.roDone();
        res.status(200).send({'success': true}).end();
    });
// router.post('/create',
//     /*Validate token to route*/
//     jwt_verify,
//     /*Token valid: Get search data
//      1) Attach query string*/
//     require('./queries/insert_new_favorite.js'),
//     /*  2) Query the attached string*/
//     sql_query.commonQuery,
//     /*  3) Query was successful, do something
//      with roInfo*/
//     function(req, res) {
//         req.roDone();
//         res.status(200).send({'success': true}).end();
//     });
// Delete favorite to unfavorite
router.delete('/unfavorite/:tagId',
    /*Validate token to route*/
    jwt_verify,
    /*Token valid: Get search data
     1) Attach query string*/
    require('./queries/delete_aka_unfavorite.js'),
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