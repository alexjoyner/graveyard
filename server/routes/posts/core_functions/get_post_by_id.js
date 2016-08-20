var Query_1 = require('../queries/get_question_info_by_id.js');
var sortPosts = require('../../../custFunctions/sortPosts.js');
module.exports = function (req, res, next) {
	console.log('Made it here!');
	Query_1(req.roConClient, req.params['id'])
		.then(function (post) {
			if (!post) {
				res.status(500).send('no question found').end();
			} else {
				var sortedPostPoints;
				if (post.points === null) {
					sortedPostPoints = [];
				} else {
					sortedPostPoints = sortPosts.topSort(post.points);
				}
				post.points = sortedPostPoints;
				req.roReturned = post;
				next()
			}
		})

};