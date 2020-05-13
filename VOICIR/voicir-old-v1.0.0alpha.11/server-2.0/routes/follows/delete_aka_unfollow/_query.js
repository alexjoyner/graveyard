module.exports = function(user_id, post_id){
	return {
		params: [user_id, post_id],
		string: `
		DELETE FROM 
			follows
		WHERE
			user_id = $1 AND post_id = $2;`
	}
}