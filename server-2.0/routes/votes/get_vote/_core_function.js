var query = require('./_query');
import {check_cache} from '../../../../utils/_server_utils';
module.exports = function (req, callback, re_cache_flag) {
	var query_info = query(req.body.post_id, req.decoded.id);
	var client = req.roConClient;
	var cache_location = 'vote_'+ req.body.vote_id + '_' +  req.decoded.id;
	check_cache(req, cache_location, function(err, cached_vote){
		if(cached_vote){
			callback(null, cached_vote);
			return;
		}
		/* Get from db*/
		client.query(query_info.string, query_info.params, function(err, result){
			if (err) throw err;
			var vote = result.rows[0];
			if (!vote) {
				callback(null, null);
				return;
			}
			//req.mtCache.set(cache_location, vote);
			callback(null, vote);
		});

	}, true);
};