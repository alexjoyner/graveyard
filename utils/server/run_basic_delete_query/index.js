/*
*	This is a base utility function to use for handling the server actions of a normal delete query
*- It's function is to run the delete query passed in through the options and and delete whatever
* data there is in the given cache location.
*	*/
import {roCache} from '../../../../server';

const run_basic_delete_query =  (req, options, callback) => {
	/* Get from db*/
	req.roConClient.query(options.query, options.params, function(err, result){
		if (err) throw err;
		var result = result.rows;
		roCache.set(options.cache_location, result);
	});
};

export {run_basic_delete_query};
