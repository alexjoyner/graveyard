module.exports = function(user_id, tag_id){
	return {
		params: [user_id, tag_id],
		string: `
		INSERT INTO "favorites-user_tag_xref"
			(user_id, tag_id)
		SELECT $1, $2
		WHERE
			NOT EXISTS (
				SELECT user_id FROM "favorites-user_tag_xref" WHERE user_id = $1 AND tag_id = $2
			);`
	}
};