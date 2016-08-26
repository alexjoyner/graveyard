var query = require('./_query');

/* LOCAL VARS*/
var query_info, client, post, new_post;

module.exports = function (req, callback) {
	post = req.body;
	query_info = query(post.title, post.detail, +post._id);
	client = req.roConClient;

	/* Get from db*/
	client.query(query_info.string, query_info.params, function(err, result){
		if (err) throw err;
		new_post = result.rows[0];
		callback(null, new_post);
	});
};