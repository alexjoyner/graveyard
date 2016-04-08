'use strict';
var express = require('express'),
    router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');


//Routes Base : '/auth'
/*
request contents:
username,
password,
email,
phone #,
profile: 3 interests
*/
router.post('/signup', function(req, res, next) {
    console.log(req.body);
    passport.authenticate('local-signup', function(err, token, info) {
        if (err) {
            return next(err); // will generate a 500 error
        }
        console.log('TOKEN: ', JSON.stringify(token));
        // Generate a JSON response reflecting authentication status
        if (!token) {
            return res.status(500).send(info.message).end();
        }
        return res.send(token).end();
    })(req, res, next);
});

router.post('/login', function(req, res, next) {
    console.log(req.body);
    passport.authenticate('local-login', function(err, user, info) {
        if (err) {
            return next(err); // will generate a 500 error
        }
        // Generate a JSON response reflecting authentication status
        if (!user) {
            return res.status(500).send(info.message).end();
        }
        return res.send(user).end();
    })(req, res, next);
});

module.exports = router;