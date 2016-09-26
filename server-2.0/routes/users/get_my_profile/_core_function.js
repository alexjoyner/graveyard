var query = require('./_query');
import {check_cache} from '../../../../utils/_server_utils';

/* LOCAL VARS*/
var query_info, client, cache_location;

module.exports = function (req, callback) {
	query_info = query(req.decoded);
	client = req.roConClient;
	cache_location = 'profile_'+ req.decoded.id;

	check_cache(req, cache_location, function(err, cached_test){
		if(cached_test){
			callback(null, cached_test);
			return;
		}
		/* Get from db*/
		client.query(query_info.string, query_info.params, function(err, result){
			if (err) throw err;
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
				req.mtCache.set(cache_location, profile);
				callback(null, profile);
			}
		});

	}, true);
};