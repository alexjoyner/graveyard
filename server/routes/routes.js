module.exports = function(app) {
    'use strict';
    //File Dependencies
    var auth = require('./auth/auth.js'),
        users = require('./users/users.js'),
        issues = require('./issues/issues.js'),
        points = require('./points/points.js'),
        support = require('./support/support.js'),
        votes = require('./votes/votes.js');
    // Routes
    // -------------------------
    app
        .use('/auth', auth)
        .use('/users', users)
        .use('/issues', issues)
        .use('/points', points)
        .use('/votes', votes)
        .use('/supports', support);
};