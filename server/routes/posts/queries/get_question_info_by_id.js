module.exports = function(req, res, next) {
	req.roQueryParams = [req.params.id];
    req.roQueryString = `
	SELECT
        *,
        (
        SELECT array_to_json(array_agg(row_to_json(a)))
        FROM (
            SELECT
                p.*,
                json_agg(s.*) as supports
            FROM posts p
            LEFT JOIN (
                SELECT
                    sup.*,
                    source_types.name as source_type,
                    point_types.name as point_type
                FROM
                    posts sup
                LEFT JOIN
                    source_types
                ON
                    (sup.source_type_id = source_types._id)
                LEFT JOIN
                    point_types
                ON
                    (sup.point_type_id = point_types._id)
            ) as s
            ON 
                (p._id = s.parent_id)
            WHERE
                p.parent_id = $1
            AND 
                (p.point_type_id = 1
            OR
                p.point_type_id = 2)
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