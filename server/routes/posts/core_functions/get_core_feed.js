var Query_1 = require('../queries/get_all_questions.js');
var sortPosts = require('../../../custFunctions/sortPosts.js');


/*
* This function should get all the posts in either the Hot/Top categories and cache the results if their are none
* */
module.exports = function(req, res, next){
	var feed_name = req.params['feed_name'];
	Query_1(req.roConClient)
		.then(function (posts) {
			var sortedPosts;
			if (!posts[0]) {
				res.status(200).send([]).end();
			}
			if (feed_name !== 'top' && feed_name !== 'hot') {
				res.status(500).send('No good feed name').end();
				return;
			}
			if (feed_name === 'hot')
				sortedPosts = sortPosts.hotSort(posts);
			if (feed_name === 'top')
				sortedPosts = sortPosts.topSort(posts);

			console.log('CACHING ' + feed_name);
			req.mtCache.set(feed_name + '_feed', sortedPosts);
			req.roReturned = sortedPosts;
			next();
		})
}