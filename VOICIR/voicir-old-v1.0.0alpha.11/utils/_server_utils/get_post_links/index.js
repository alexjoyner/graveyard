var query = require('./_query');
import {roCache, pg_query, get_bulk_posts} from '../../../server';
/* LOCAL VARS*/
var query_info;

export function get_post_links (id, callback) {
	query_info = query(id);
	let cache_location = 'post_links_' + id;
	// Search cache for array of points
	// 	get bulk posts
	// NOT! - Get all points from DB
	// - Cache array of id's of posts
	// - Cache each post
	// - Return points
	// - Cache array of id's of posts
	// - Cache each post
	// - Return points
	roCache.get(cache_location, function(err, links){
		if(err) throw err;
		if(links){
			callback(null, links)
			return;
		}
		// NOT! - Get all points from DB
		pg_query(query_info.string, query_info.params, function(err, result){
			if (err) throw err;
			let links = result.rows;
			roCache.set(cache_location, links);
			// - Return points
			callback(null, links)
		});
		// - Cache array of id's of posts
		// - Cache each post
		// - Return points
	});


	/*// Search cache for array of points
	roCache.get(cache_location, function(err, points_array){
		if(err) throw err;
		if(points_array){
			// 	get bulk posts
			get_bulk_posts(points_array, function(err, posts){
				if(err){
					callback(err);
					return;
				}
				callback(null, posts);
			})
		}
		// NOT! - Get all points from DB
		pg_query(query_info.string, query_info.params, function(err, result){
			if (err) throw err;
			let posts = result.rows;
			// - Cache array of id's of posts
			let post_ids = [];
			for(let i = 0; i < posts.length; i++){
				post_ids.push(posts[i]._id);
			}
			roCache.set(cache_location, post_ids);
			// - Cache each post
			// - Return points
		});
		// - Cache array of id's of posts
		// - Cache each post
		// - Return points
	});*/
};