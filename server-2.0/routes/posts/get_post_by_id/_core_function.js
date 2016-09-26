var query = require('./_query');
import {check_cache, top_sort_posts} from '../../../../utils/_server_utils';
/* LOCAL VARS*/
var query_info, client, cache_location;

module.exports = function (req, callback) {
	query_info = query(req.params.id);
	client = req.roConClient;
	cache_location = 'post_' + req.params.id;

	check_cache(req,cache_location, function(err, cached_post){
		if(cached_post){
			callback(null, cached_post);
			return;
		}
		/* Get from db*/
		client.query(query_info.string, query_info.params, function(err, result){
			if (err) throw err;
			var post = result.rows[0];
			if (!post) {
				callback({
					err: new Error('No post found'),
					status: 400
				});
				return
			}
			if (post.points === null) {
				post.points = [];
			} else {
				post.points = top_sort_posts(post.points);
			}
			req.mtCache.set(cache_location, post);
			callback(null, post);
		});

	}, true);
};
