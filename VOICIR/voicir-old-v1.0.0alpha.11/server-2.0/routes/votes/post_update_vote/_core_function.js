var query = require('./_query');

/* LOCAL VARS*/
var query_info, client, cache_location;

module.exports = function (req, vote, callback) {
	query_info = query(vote._id, vote.vote_type_id);
	client = req.roConClient;

	/* Get from db*/
	client.query(query_info.string, query_info.params, function(err, result){
		if (err) throw err;
		var vote = result.rows[0];
		//req.mtCache.set(cache_location, vote);
		callback(null, vote)
	});
};