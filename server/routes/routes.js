module.exports = function(app) {
    'use strict';
    //File Dependencies
    var issues = require('./issues/issues.js'),
        points = require('./points/points.js'),
        support = require('./support/support.js');
    // Routes
    // -------------------------
    app
        .use('/issues', issues)
        .use('/points', points)
        .use('/support', support);

};