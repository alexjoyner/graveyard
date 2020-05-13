var query = require('./_query');
var post, user, queryInfo;
module.exports = function(req, callback) {
	post = req.body;
	user = req.decoded;
	queryInfo = query(post, user);
	req.roConClient.query(queryInfo.string, queryInfo.params, function (err, result) {
		if (err) throw err;
		var new_post = result.rows[0];
		if (!new_post){
			callback({
				message: new Error('could not create post'),
				status: 400
			}, null);
			return;
		}
		callback(null, new_post);
	})
};
