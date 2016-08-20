var Q = require('q');
module.exports = function(client) {
	var deffered = Q.defer();
	roQueryParams = [];
	roQueryString = `
	SELECT 
	    *
	FROM 
	    posts
	WHERE
	    post_type_id = 1
	AND
		is_deleted = false
	LIMIT
	    40;
	`;
	client.query(roQueryString, roQueryParams, function(err, result) {
		if(err) deferred.reject(new Error(err));
		deffered.resolve(result.rows);
	});
	return deffered.promise;
};