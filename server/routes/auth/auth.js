'use strict';
var express = require('express'),
    router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');

//Routes Base : '/auth'
var secretSignupCode = 'supertesters'
router.post('/signup', function(req, res, next) {
    console.log(req.body);
    if(req.body.specialCode === secretSignupCode){
        passport.authenticate('local-signup', function(err, token, info) {
            if (err) {
                return next(err); // will generate a 500 error
            }
            // Generate a JSON response reflecting authentication status
            if (!token) {
                return res.status(500).send(info.message).end();
            }
            return res.send(token).end();
        })(req, res, next); 
    }else{
        res.status(500).send('Special Code not valid');
    }
});

router.post('/login', function(req, res, next) {
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