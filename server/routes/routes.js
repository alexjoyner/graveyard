module.exports = function(app) {
    'use strict';
    // File Dependencies
    // ------------------------
    var auth    = require('./auth/auth.js'),
        users   = require('./users/users.js'),
        posts   = require('./posts/posts.js'),
        votes   = require('./votes/votes.js'),
        tags    = require('./tags/tags.js'),
        follows = require('./follows/follows.js'),
        tests   = require('./tests/tests.js'),
        notifs  = require('./notifs/notifs.js'),
        favorites = require('./favorites/favorites.js');
    // Routes
    // ------------------------
    app
        .use('/auth', auth)
        .use('/users', users)
        .use('/posts', posts)
        .use('/votes', votes)
        .use('/tags', tags)
        .use('/tests', tests)
        .use('/follows', follows)
        .use('/notifs', notifs)
        .use('/favorites', favorites);
};