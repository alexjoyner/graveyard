var asyc = require('async');
import {get_post_by_id, get_post_links, top_sort_posts} from '../../../../server';

module.exports = function (req, callback) {
	asyc.parallel([
		// ----------- Get post -----------
		get_post_by_id.bind(this, req.params.id),
		// ----------- Get links -----------
		get_post_links.bind(this, req.params.id)
	], function(err, result){
		if(err){
			callback('something went wrong');
			throw err;
		}
		// ----------- Top sort links --------
		let sortedPosts = top_sort_posts(result[1]);

		// ----------- Combine Post with links --------
		let returnedPosts = result[0][0];
		returnedPosts['points'] = sortedPosts;
		callback(null, returnedPosts);

	});
};