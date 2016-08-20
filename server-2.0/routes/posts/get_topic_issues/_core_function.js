var query = require('./_query');
var check_cache = require('../../../utils/checkCache');
var sortPosts = require('../../../utils/sortPosts');

/* LOCAL VARS*/
var query_info, client, cache_location;

module.exports = function (req, callback) {
	query_info = query(req.params.tag_id);
	cache_location = 'topic_feed_' + req.params.tag_id;

	client = req.roConClient;

	check_cache(req, cache_location, function(err, cached_test){
		req.roDone();
		if(cached_test){
			callback(null, cached_test);
			return;
		}
		/* Get from db*/
		client.query(query_info.string, query_info.params, function(err, result){
			if(err) throw err;
			var issues = result.rows;
			sortedPosts = sortPosts.hotSort(issues);
			req.mtCache.set(cache_location, sortedPosts);
			callback(null, sortedPosts);
		});

	});
};