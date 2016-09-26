var query = require('./_query');
import {check_cache} from '../../../../utils/_server_utils';
module.exports = function (req, callback, re_cache_flag) {
	var query_info = query(req.decoded);
	var client = req.roConClient;
	var cache_location = 'follows_'+ req.decoded.id;
	check_cache(req, cache_location, function(err, cached_favs){
		if(cached_favs){
			callback(null, cached_favs);
			return;
		}
		/* Get from db*/
		client.query(query_info.string, query_info.params, function(err, result){
			if (err) throw err;
			var follows = result.rows;
			if (!follows[0]) {
				callback(null, []);
				return;
			}
			req.mtCache.set(cache_location, follows);
			callback(null, follows);
		});

	}, re_cache_flag);
};