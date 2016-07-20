module.exports = function(req, res, next) {
	req.roQueryParams = [];
    req.roQueryString = `
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
	next();
};