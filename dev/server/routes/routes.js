module.exports = function(app) {
    'use strict';
    //File Dependencies
    var auth = require('./auth/auth.js'),
        users = require('./users/users.js'),
        posts = require('./posts/posts.js'),
        votes = require('./votes/votes.js');
    // Routes
    // -------------------------
    app
        .use('/auth', auth)
        .use('/users', users)
        .use('/posts', posts)
        .use('/votes', votes);
};