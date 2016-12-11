var query = require('./_query');
import {pg_query, roCache} from '../../../server';

/* LOCAL VARS*/
var query_info, client, cache_location;

export function get_bulk_posts(post_id_array, callback) {
	client = req.roConClient;
	cache_location = '';
	// FOUND! - Search cache for each id in array
	let postKeyArray = post_id_array.map(_id => 'post_' + _id);
	let returnedPosts = [];
	let idSetNotInCache = [];
	let bulkSearch = false;
	roCache.mget(postKeyArray, function(err, from_cache_posts){
		if(err){
			callback('Something went wrong');
			throw err;
		}
		// AFTER SEARCH - Make array of id's not found
		for(let i = 0; i < from_cache_posts.length; i++){
			let post = from_cache_posts[i];
			if(post === {}){
				bulkSearch = true;
				idSetNotInCache.push(i);
			}else{
				returnedPosts.push(from_cache_posts[i]);
			}
		}
		// All posts were found in cache
		if(!bulkSearch){
			return callback(null, from_cache_posts);
		}

		query_info = query(idSetNotInCache);

		// - Bulk get id's not found in cache
		pg_query(query_info.string, query_info.params, function(err, result){
			if (err) throw err;
			let posts = result.rows;
			// - Combine searched and cached posts
			returnedPosts.concat(posts);
			// - Return as points
			callback(null, posts);
		});

	});
};