module.exports = function(user){
	return {
		params: [user.id],
		string: `
		SELECT 
			*
		FROM 
			"favorites-user_tag_xref"
		LEFT JOIN
			tags
		ON
			"favorites-user_tag_xref".tag_id = tags._id
		WHERE
			user_id = $1;`
	}
}