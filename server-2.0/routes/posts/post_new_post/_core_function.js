var query = require('./_query');
var post, user, queryInfo;
module.exports = function(req, callback) {
	post = req.body.post;
	user = req.decoded;
	queryInfo = query(post, user);
	req.roConClient.query(queryInfo.string, queryInfo.params, function (err, new_post) {
		if (err) throw err;
		if (!new_post){
			callback(new Error('could not create post'), null);
			return;
		}
		req.mtCache.set('post_' + new_post._id, new_post);
		callback(null, new_post);
	})
};