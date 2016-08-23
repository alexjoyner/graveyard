var query = require('./_query');
var check_cache = require('../../../utils/checkCache');

/* LOCAL VARS*/
var query_info, client, cache_location, post_id;

module.exports = function (req, callback) {
	post_id = req.params.id;
	query_info = query(post_id);
	client = req.roConClient;
	cache_location = 'post_' + post_id;

	/* Get from db*/
	client.query(query_info.string, query_info.params, function(err, result){
		if(err) throw err;
		req.mtCache.del(cache_location);
		callback(null, {success: true});
	});
};