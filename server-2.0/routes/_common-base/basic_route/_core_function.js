var query = require('./_query');
var check_cache = require('../../../utils/checkCache');

/* LOCAL VARS*/
var query_info, client, cache_location;

module.exports = function (req, callback) {
	query_info = query(req.decoded);
	client = req.roConClient;
	cache_location = '';

	check_cache(req,cache_location, function(err, cached_test){
		req.roDone();
		if(cached_test){
			callback(null, cached_test);
			return;
		}
		/* Get from db*/
		client.query(query_info.string, query_info.params, function(err, result){
			if (err) throw err;
			var test = result.rows;
			req.mtCache.set(cache_location, test);
		});

	});
};