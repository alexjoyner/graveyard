module.exports = function(req, res, next) {
	req.roQueryParams = [req.decoded.id];
    req.roQueryString = `
	SELECT 
        *,
        (SELECT array_to_json(array_agg(row_to_json(v)))
        FROM (
            SELECT
                post_id, vote_type_id
            FROM 
                votes
            WHERE 
                user_id = $1
        )v) as votes
    FROM users
    WHERE
        users._id = $1
    ;`;
    next();
}