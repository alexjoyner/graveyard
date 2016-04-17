module.exports = function(app) {
    'use strict';
    //File Dependencies
    var auth = require('./auth/auth.js'),
        users = require('./users/users.js'),
        posts = require('./posts/posts.js'),
        votes = require('./votes/votes.js'),
        tags = require('./tags/tags.js');
    // Routes
    // -------------------------
    app
        .use('/auth', auth)
        .use('/users', users)
        .use('/posts', posts)
        .use('/votes', votes)
        .use('/tags', tags);
};