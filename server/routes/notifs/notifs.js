'use strict';
var express = require('express'),
    router = express.Router();
var jwt_verify = require('../../middleware/jwt_verify.js');
var sql_query = require('../../middleware/sql_query.js');
// !! route = '/notifications'

router.get('/my/unread',
    /*
    * Validate the token coming in
    * */
    jwt_verify,
    /*
    * Token valid, attach query string
    * to get the users notifications
    * */
    require('./queries/get_user_notifs.js'),
    /* Query the attached query string
    * */
    sql_query.commonQuery,
    /*
    * Query successful, return the notifications*/
    function (req, res) {
        req.roDone();
        console.log(req.decoded.id + '\'s Notifications: ', req.roInfo.rows);
        res.status(200).send(req.roInfo.rows).end();
    }
);
router.post('/read',
    /*
     * Validate the token coming in
     * */
    jwt_verify,
    /*
     * Token valid, attach query string
     * to get the users notifications
     * */
    require('./queries/post_read_notif.js'),
    /* Query the attached query string
     * */
    sql_query.commonQuery,
    /*
     * Query successful, return the notifications*/
    function (req, res) {
        req.roDone();
        res.status(200).send({success: true}).end();
    })
module.exports = router;