var query = require('./_query');
module.exports = function(req, callback) {
	req.roConClient.query(query.string, query.params, function(err, result) {
		if(err) throw err;
		var issues = result.rows;
		callback(null, issues)
	});
};