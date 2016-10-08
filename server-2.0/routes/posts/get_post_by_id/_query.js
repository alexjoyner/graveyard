module.exports = function (postId) {
	return {
		params: [postId],
		string: `
		SELECT
			*,
			(
			SELECT array_to_json(array_agg(row_to_json(a)))
			FROM (
				SELECT
					p.*,
					q.*
				FROM post_post_xref p
				LEFT JOIN
					posts q
				ON
					(p.from_post_id = q._id)
				WHERE
					p.to_post_id = $1
				GROUP BY 
					p.from_post_id, 
					p.to_post_id, 
					p.link_type_id,
					p.created_at,
					p.pro_ups,
					p.con_ups,
					p.dwns,
					q._id
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
		`
	}
};