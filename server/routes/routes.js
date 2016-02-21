module.exports = function(app){
	'use strict';
	//File Dependencies
	var issues = require('./issues/issues.js');
	// Routes
	// -------------------------
	app.use('/issues', issues);

};