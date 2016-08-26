var query = require('./_query');

/* LOCAL VARS*/
var query_info, client, cache_location;

module.exports = function (req, email, callback) {
	query_info = query(email);
	client = req.roConClient;

	/* Get from db*/
	client.query(query_info.string, query_info.params, function(err, result){
		if (err) throw err;
		var user = result.rows[0];
		if(!user){
			return callback(null, null);
		}
		callback(null, user);
	});
};