var query = require('./_query');
import {roCache, hot_sort_posts, pg_query} from '../../../../server';

/* LOCAL VARS*/
var query_info, client, cache_location;

module.exports = function (req, callback) {
	query_info = query(req.params.tag_id);
	cache_location = 'topic_feed_' + req.params.tag_id;

	roCache.get(cache_location, function(err, cached_test){
		if(cached_test){
			callback(null, cached_test);
			return;
		}
		/* Get from db*/
		pg_query(query_info.string, query_info.params, function(err, result){
			if (err) throw err;
			var issues = result.rows;
			var sortedPosts = hot_sort_posts(issues);
			roCache.set(cache_location, sortedPosts);
			callback(null, sortedPosts);
		});

	});
};