module.exports = function(id){
	return {
		params: [id],
		string: `
		SELECT
			p.*,
			q.*
		FROM post_post_xref p
		LEFT JOIN
			posts q
		ON
			(p.from_post_id = q._id)
		WHERE
			p.to_post_id = $1`
	}
};