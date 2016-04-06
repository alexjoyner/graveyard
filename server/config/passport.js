'use strict';
// Dependencies
var config = require('./config.js');
var LocalStrategy = require('passport-local').Strategy;
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

var superSecret = config.secret; //Secret var for jsonWebTokens
// Mongoose models
var users = require('../models/userModel.js');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        users.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done) {
            process.nextTick(function() {
                users.findOne({
                    'local.email': email
                }, function(err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        return done(null, false, {
                            message: 'That email already taken'
                        });
                    } else {
                        var newUser = new users();
                        newUser.local.email = email;
                        newUser.local.password = newUser.generateHash(password);
                        newUser.profile.firstName = req.body.firstName;
                        newUser.profile.lastName = req.body.lastName;
                        newUser.profile.mobileNum = req.body.mobileNum;
                        newUser.role = req.body.role;
                        newUser.save(function(err) {
                            if (err)
                                throw err;


                            var token = jwt.sign({
                                id: newUser._id,
                                email: newUser.local.email
                            }, superSecret, {
                              expiresInMinutes: 1440 // <-- expires in 24 hours
                            });
                            return done(null, {
                              profile: newUser,
                              success: true,
                              message: 'Enjoy your token!',
                              token: token
                            });
                        });
                    }

                });
            });
        }
    ));
    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, done) {
        process.nextTick(function() {
            users.findOne({
                'local.email': email
            }, function(err, user) {
                if (err) return done(err);
                if (!user) {
                    return done(null, false, {
                        message: 'No user found'
                    });
                }
                if (!user.validPassword(password)) {
                    return done(null, false, {
                        message: 'Invalid password'
                    });
                }
                // if user is found and password is right
                // create a token
                var token = jwt.sign({
                    id: user._id,
                    email: user.local.email
                }, superSecret, {
                  expiresInMinutes: 1440 // <-- expires in 24 hours
                });
                return done(null, {
                  profile: user,
                  success: true,
                  message: 'Enjoy your token!',
                  token: token
                });
            });
        });
    }));
};