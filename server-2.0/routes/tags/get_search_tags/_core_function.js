var query = require('./_query');

/* LOCAL VARS*/
var query_info, client;

module.exports = function (req, callback) {
	query_info = query('%' + req.params.search_term + '%', req.params.tag_type);
	client = req.roConClient;

	/* Get from db*/
	client.query(query_info.string, query_info.params, function(err, result){
		if (err) throw err;
		var posts = result.rows;
		callback(null, posts)
	});
};