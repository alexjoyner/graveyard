module.exports = function(req, res, next) {
	req.roQueryParams = [req.params.id];
    req.roQueryString = `
	SELECT
        *,
        (
        SELECT array_to_json(array_agg(row_to_json(a)))
        FROM (
            SELECT
                p.*
            FROM posts p
            WHERE
                p.parent_id = $1
            GROUP BY 
                p._id
        )a ) as points,
        (
        SELECT array_to_json(array_agg(row_to_json(t)))
        FROM (
        SELECT
            *
        FROM 
            post_tags_xref
        LEFT JOIN
            tags
        ON
            (post_tags_xref.tag_id = tags._id)
        WHERE
            post_id = $1) t) as tags
    FROM
        posts
    WHERE
        _id = $1;
	`;
    next();
}