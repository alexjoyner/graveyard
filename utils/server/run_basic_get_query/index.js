/*
*	This is a base utility function to use for handling the server actions of a normal route
*- It is equiped to handle searching a single cache location to see if data is already stored,
	* and returning back if cached data is found.
*- If no cached data is found, it will run a single given query to retrieve that information
*	and store that information into the given cache location if needed.
*	*/

var query = require('./_query');
import {roCache} from '../../../../server';

/* LOCAL VARS*/
var query_info, client, cache_location;

const handle_route =  (req, options, callback) => {
	roCache.get(options.cache_location, function(err, cached_test){
		req.roDone();
		if(cached_test){
			callback(null, cached_test);
			return;
		}
		/* Get from db*/
		client.query(options.query_string, options.params, function(err, result){
			if (err) throw err;
			let result = result.rows;
			roCache.set(options.cache_location, result);
			callback(null, result);
		});

	});
};

export {handle_route};

export {handle_route};
