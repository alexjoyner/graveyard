module.exports = function(user){
	return {
		params: [user.id],
		string: `
		SELECT 
			post_id
		FROM 
			follows
		WHERE
			user_id = $1;`
	}
}