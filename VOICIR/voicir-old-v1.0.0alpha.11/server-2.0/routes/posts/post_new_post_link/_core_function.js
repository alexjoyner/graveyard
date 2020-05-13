var query = require('./_query');
var link, user, queryInfo;
module.exports = function(req, callback) {
	link = req.body;
	user = null/*req.decoded*/;
	queryInfo = query(link, user);
	req.roConClient.query(queryInfo.string, queryInfo.params, function (err, result) {
		if (err) throw err;
		var new_post = result.rows[0];
		if (!new_post){
			callback({
				message: new Error('could not create link'),
				status: 400
			}, null);
			return;
		}
		callback(null, new_post);
	})
};