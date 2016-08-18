'use strict';
var express = require('express'),
    router = express.Router();
var passport = require('passport');
var sql_query = require('../../middleware/sql_query.js');
//Routes Base : '/auth'
var secretSignupCode = 'supertesters'
router.post('/signup', function(req, res, next) {
    if(req.body.specialCode === secretSignupCode){
        passport.authenticate('local-signup', function(err, token, info) {
            if (err) {
                return next(err); // will generate a 500 error
            }
            // Generate a JSON response reflecting authentication status
            if (!token) {
                return res.status(500).send(info.message).end();
            }
            return res.status(200).send(token).end();
        })(req, res, next); 
    }else{
        res.status(500).send('Special Code not valid');
    }
});

router.post('/login',
    function(req, res, next) { // TODO: Make this neater so that follows are gotten when the user logs in
        passport.authenticate('local-login', function(err, user, info) {
            if (err) {
                return next(err); // will generate a 500 error
            }
            // Generate a JSON response reflecting authentication status
            if (!user) {
                return res.status(500).send(info.message).end();
            }
            req.decoded = {id: user.profile._id};
            req.user = user;
            return next();
        })(req, res, next); //Note: Passport binds to req res next
    },
    /* Successful login: Get users login data
     1) Attach query string*/
    require('../votes/queries/get_my_votes.js'), // TODO: Get all the favorite tags / notifications when user logs in
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something
     with roInfo*/
    function(req, res, next) {
        req.user.profile.votes = req.roInfo.rows;
        next();
    },
    /* Successful login: Get users login data
     1) Attach query string*/
    require('../follows/queries/get_my_follows.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something
     with roInfo*/
    function(req, res, next) {
        req.user.profile.follows = req.roInfo.rows;
        next();
    },
    /*Token valid: Get search data
     1) Attach query string*/
    require('../favorites/queries/get_my_favorites.js'),
    /*  2) Query the attached string*/
    sql_query.commonQuery,
    /*  3) Query was successful, do something
     with roInfo*/
    function(req, res) {
        req.roDone();
        req.user.profile.favorites = req.roInfo.rows;
        res.status(200).send(req.user).end();
    }
);

module.exports = router;