var query = require('./_query');
import {roCache} from '../../../../server';
module.exports = function (req, callback, re_cache_flag) {
	var query_info = query(req.decoded);
	var client = req.roConClient;
	var cache_location = 'favorites_'+ req.decoded.id;
	roCache(req, cache_location, function(err, cached_favs){
		if(cached_favs){
			callback(null, cached_favs);
			return;
		}
		/* Get from db*/
		client.query(query_info.string, query_info.params, function(err, result){
			if (err) throw err;
			var favorites = result.rows;
			if (!favorites[0]) {
				callback(null, []);
				return;
			}
			req.mtCache.set(cache_location, favorites);
			callback(null, favorites);
		});

	}, re_cache_flag);
};