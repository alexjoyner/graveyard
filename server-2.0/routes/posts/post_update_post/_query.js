module.exports = function(title, detail, post_id){
	return {
		params: [title, detail, post_id],
		string: `
		UPDATE
			posts
		SET 
			title = $1,
			detail = $2
		WHERE
			_id = $3::int;
		`
	}
}