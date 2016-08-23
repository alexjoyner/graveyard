var query = require('./_query');

/* LOCAL VARS*/
var query_info, client, cache_location;

module.exports = function (req, callback) {
	query_info = query(req.body.post_id, req.decoded.id, new Date, req.body.vote_type_id);
	client = req.roConClient;
	//cache_location = 'vote_'+ req.body.vote_id + '_' +  req.decoded.id;

	/* Get from db*/
	client.query(query_info.string, query_info.params, function(err, result){
		if(err) throw err;
		var vote = result.rows[0];
		//req.mtCache.set(cache_location, vote);
		callback(null, vote)
	});
};