var query = require('./_query');
import {roCache, pg_query} from '../../../server';
/* LOCAL VARS*/
var query_info;

export function get_post_by_id (id, callback) {
	query_info = query(id);
	let cache_location = 'post_' + id;
	// Search Cache for post
	roCache.get(cache_location, function (err, post) {
		if(err){
			callback(err, null);
			return;
		}
		// 	FOUND! - go to Get Points
		if(post){
			callback(null, post);
			return;
		}
		// NOT - Get post from DB
		pg_query(query_info.string, query_info.params, function(err, result){
			if (err) throw err;
			var post = result.rows;
			// Cache post from DB
			roCache.set(cache_location, post);
			callback(null, post);
		});

	});
};