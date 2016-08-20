module.exports = {
	params: [],
	string: `
		SELECT
			*
		FROM
			posts
		WHERE
			post_type_id = 1
		AND
			is_deleted = false
		LIMIT
			1000;`
};