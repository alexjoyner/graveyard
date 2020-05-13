module.exports = function(user){
	return {
		params: [user.id],
		string: `
		SELECT 
			*
		FROM 
			votes
		WHERE
			user_id = $1;`
	}
}