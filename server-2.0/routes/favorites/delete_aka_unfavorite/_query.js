module.exports = function(user_id, tag_id){
	return {
		params: [user_id, tag_id],
		string: `
		DELETE FROM 
			"favorites-user_tag_xref"
		WHERE
			user_id = $1 AND tag_id = $2;`
	}
}