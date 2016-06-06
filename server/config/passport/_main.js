'use strict';
// Dependencies
var passport = require('passport');

module.exports = function() {
    require('./local-signup.js')(passport);     // Signup Strategy
    require('./local-login.js')(passport);      // Login Strategy

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        users.findById(id, function(err, user) {
            done(err, user);
        });
    });
};