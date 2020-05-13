var query = require('./_query');
var async = require('async');
var get_my_favorites = require('../get_my_favorites/_core_function');
/* LOCAL VARS*/
var query_info, client;

module.exports = function (req, callback) {
	query_info = query(req.decoded.id, req.body.tag_id);
	client = req.roConClient;

	async.series([
		function(next){
			client.query(query_info.string, query_info.params, next);
		},
		function(next){
			get_my_favorites(req, next, true);
		}
	],function(err){
		if (err) throw err;
		return callback(null, {success: true});
	});
};