var query = require('./_query');
var check_cache = require('../../../utils/checkCache');
module.exports = function (req, callback, re_cache_flag) {
	var query_info = query(req.decoded);
	var client = req.roConClient;
	var cache_location = 'votes_'+ req.decoded.id;
	check_cache(req, cache_location, function(err, cached_favs){
		if(cached_favs){
			callback(null, cached_favs);
			return;
		}
		/* Get from db*/
		client.query(query_info.string, query_info.params, function(err, result){
			if(err) throw err;
			var votes = result.rows;
			if (!votes[0]) {
				callback(null, []);
				return;
			}
			req.mtCache.set(cache_location, votes);
			callback(null, votes);
		});

	}, true);
};