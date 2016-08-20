var Query_1 = require('../queries/insert_new_post.js');
/*
 * This function should get all the posts in either the Hot/Top categories and cache the results if their are none
 * */
module.exports = function(req, res, next){
	var feed_name = req.params['feed_name'];
	Query_1(req.roConClient, req.body.post, req.decoded)
		.then(function (postCreated) {
			// If the post isn't of type issue, notify all followers of parent
			// 		that the post was created
			// TODO: Make sure follower are notified of a new post that's not an issue
			// if (postCreated.post_type_id !== 1) {
			// 	require('./../../utility_functions/notify_followers_new_post.js');
			// }
			req.roReturned = postCreated;
			next();
		})
}