/*
*	This is a base utility function to use for handling the server actions of a normal route
*- It is equiped to handle searching a single cache location to see if data is already stored,
	* and returning back if cached data is found.
*- If no cached data is found, it will run a single given query to retrieve that information
*	and store that information into the given cache location if needed.
*	*/
import {roCache} from '../../../server';

const run_basic_post_query =  (req, options, callback) => {
	req.roConClient.query(options.query, options.params, function (err, result) {
		if (err) throw err;
		var new_post = result.rows[0];
		if (!new_post){
			callback(400, null);
			return;
		}
		roCache.set(options.cache_location, result);
		callback(null, new_post);
	})
};

export {run_basic_post_query};
