var query = require('./_query');
module.exports = function (client, user, callback) {
	var query_info = query(user);
	client.query(query_info.string, query_info.params, function(err, result){
		if(err) throw err;
		var profile = result.rows[0];
		if (!profile) {
			callback({
				message: new Error('Something went wrong, your profile was not found.'),
				status: 400
			}, result);
		} else {
			if(!profile['votes']){
				profile['votes'] = [];
			}
			if(!profile['follows']){
				profile['follows'] = [];
			}
			if(!profile['favorites']){
				profile['favorites'] = [];
			}
			callback(null, profile);
		}
	});
}