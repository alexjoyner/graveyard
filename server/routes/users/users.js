'use strict';
var express = require('express'),
    router = express.Router();
var config = require('../../config/config.js');
// POSTGRES IMPLEMENTATION
var sql_query = require('../../middleware/sql_query.js');

var jwt_verify = require('../../middleware/jwt_verify.js')

router.get('/profile', 
    /*Validate token to route*/
    jwt_verify,
    /*Token valid: Get question data
        1) Attach query string*/
    require('./queries/get_profile_by_id.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something 
                with roInfo*/
    function(req, res){
        req.roDone();
        var result = req.roInfo;
        if (!result.rows[0]) {
            res.status(500).send('no questions found').end();
        } else {
            if(!result.rows[0]['votes']){
                result.rows[0]['votes'] = [];
            }
            if(!result.rows[0]['follows']){
                result.rows[0]['follows'] = [];
            }
            if(!result.rows[0]['favorites']){
                result.rows[0]['favorites'] = [];
            }
            res.status(200).send(result.rows[0]).end();
        }
});

module.exports = router;