'use strict';
// Dependencies
var LocalStrategy = require('passport-local').Strategy;

// Mongoose models
var users = require('../models/usersModel.js');

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
            usernameField: 'username',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, username, password, done) {
            process.nextTick(function() {
                users.findOne({
                    'local.username': username
                }, function(err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        return done(null, false, {
                            message: 'That username already taken'
                        });
                    } else {
                        var newUser = new users();
                        newUser.local.username = username;
                        newUser.local.password = newUser.generateHash(password);
                        newUser.profile.firstName = req.body.firstName;
                        newUser.profile.lastName = req.body.lastName;
                        newUser.profile.mobileNum = req.body.mobileNum;
                        newUser.role = req.body.role;
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }

                });
            });
        }
    ));
    passport.use('local-login', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, username, password, done) {
        process.nextTick(function() {
            users.findOne({
                'local.username': username
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
                return done(null, user);
            });
        });
    }));
};