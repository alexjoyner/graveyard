module.exports = function(email){
	return {
		params: [email],
		string: `
		SELECT 
			*
		FROM users
		WHERE
			users.email = $1 
		;`
	}
}