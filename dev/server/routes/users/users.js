'use strict';
var express = require('express'),
    router = express.Router();

var jwt_verify = require('../../middleware/jwt_verify.js')
// Mongoose models
var users = require('../../models/userModel.js');

router.get('/profile', jwt_verify, function(req, res){
	users.findOne({
        'local.email': req.decoded.email
    }, function(err, user) {
        if(err) throw err;
        if (!user) {
        	res.status(500).send('No user found').end();
        }
        res.status(200).send(user).end();
    });
});

module.exports = router;