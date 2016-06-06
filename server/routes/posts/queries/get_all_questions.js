module.exports = function(req, res, next) {
	req.roQueryParams = [];
    req.roQueryString = `
	SELECT 
	    p.*,
	    json_agg(rP.*) as most_recent_point
	FROM 
	    posts p
	LEFT JOIN (
	    SELECT
	        mostrecent.*
	    FROM
	        posts mostrecent
	    ORDER BY
	        created_at DESC
	) as rP
	ON
	    rP.parent_id = p._id
	WHERE
	    p.post_type_id = 1
	GROUP BY
	    p._id
	LIMIT
	    40;
	`;
	next();
}