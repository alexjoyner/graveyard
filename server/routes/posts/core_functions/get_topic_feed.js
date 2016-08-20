var Query_1 = require('../queries/get_topic_questions.js');
// Special functions
var sortPosts = require('../../../custFunctions/sortPosts.js');

/*
* THIS FUNCTION WILL QUERY THE DATABASE TO GET ALL THE POSTS IN A GIVEN TOPIC CATEGORY
* */
module.exports = function (req, res, next) {
	var topicId = req.params['tagId'];
	Query_1(req.roConClient, topicId)
		.then(function (posts) {
			if (!posts[0]) {
				res.status(200).send([]).end();
			} else {
				var sortedPosts = sortPosts.hotSort(posts);
				console.log('CACHING ' + 'tag_feed_' + req.params['tagId']);
				req.mtCache.set('tag_feed_' + req.params['tagId'], sortedPosts);
				req.roReturned = sortedPosts;
				next();
			}
		})
};