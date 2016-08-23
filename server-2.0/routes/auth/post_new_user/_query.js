module.exports = function(email, hash_password, zipcode){
	return {
		params: [email, hash_password, zipcode],
		string: `
		INSERT INTO 
			users   
			(email,password, zipcode)
		VALUES      
			($1,$2, $3)
		RETURNING
			*
		;`
	}
}