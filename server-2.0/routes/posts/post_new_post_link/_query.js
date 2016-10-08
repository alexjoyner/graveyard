module.exports = function (link, user) {
	return {
		params: [link.from_post_id, link.to_post_id, 1],
		string: `
		INSERT INTO
			post_post_xref (
			  from_post_id,
			  to_post_id,
			  link_type_id)
			VALUES (
			  $1,$2,$3)
		RETURNING
			*;
		`
	}
};