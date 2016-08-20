// Node Cache
var node_cache = require('node-cache');
module.exports = function(app){
	var mtCache = new node_cache({stdTTL: 86400 /* A full day*/, checkperiod: 3600 * 4 /*Every 4 hours*/});
	// Make io accessible to our router
	app.use(function(req, res, next) {
		'use strict';
		req.mtCache = mtCache;
		next();
	});
}