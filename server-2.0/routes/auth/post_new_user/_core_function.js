var query = require('./_query');
import {check_cache} from '../../../../utils/_server_utils';

/* LOCAL VARS*/
var query_info, client, cache_location;

module.exports = function (req, email, hash_password, zipcode, callback) {
	query_info = query(email, hash_password, zipcode);
	client = req.roConClient;
	cache_location = '';

	check_cache(req,cache_location, function(err, cached_test){
		req.roDone();
		if(cached_test){
			return callback(null, cached_test);
		}
		/* Get from db*/
		client.query(query_info.string, query_info.params, function(err, result){
			if (err) throw err;
			var user = result.rows[0];
			user['votes'] = [];
			user['follows'] = [];
			user['favorites'] = [];
			return callback(null, user);
		});

	});
};