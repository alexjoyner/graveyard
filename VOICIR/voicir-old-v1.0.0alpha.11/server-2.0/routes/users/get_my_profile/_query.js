module.exports = function(user){
	return {
		params: [user.id],
		string: `
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
			)v) as votes,
			(SELECT array_agg(row_to_json(v))
			FROM (
				SELECT
					post_id
				FROM 
					follows
				WHERE 
					user_id = $1
			)v) as follows,
			(SELECT array_agg(row_to_json(v))
			FROM (
				SELECT 
					*
				FROM 
					"favorites-user_tag_xref"
				LEFT JOIN
					tags
				ON
					"favorites-user_tag_xref".tag_id = tags._id
				WHERE
					user_id = $1
			)v) as favorites
		FROM users
		WHERE
			users._id = $1
		;`
	}
}