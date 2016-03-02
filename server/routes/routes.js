module.exports = function(app) {
    'use strict';
    //File Dependencies
    var issues = require('./issues/issues.js'),
        pros = require('./pros/pros.js'),
        cons = require('./cons/cons.js'),
        support = require('./support/support.js');
    // Routes
    // -------------------------
    app
        .use('/issues', issues)
        .use('/pros', pros)
        .use('/cons', cons)
        .use('/support', support);

};