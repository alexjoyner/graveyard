// Dependencies
var LocalStrategy = require('passport-local').Strategy;
var config = require('../../../config/config.js');
var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var bcrypt = require('bcrypt');
var superSecret = config.secret; //Secret var for jsonWebTokens
var async = require('async');
var get_user_by_email = require('../get_user_by_email/_core_function');
var get_user_followers = require('../../follows/get_my_follows/_core_function');
var get_user_favorites = require('../../favorites/get_my_favorites/_core_function');
var get_user_votes = require('../../votes/get_my_votes/_core_function');
module.exports = function (passport) {
    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, callback) {
        process.nextTick(function (){

        });
    }));
}
