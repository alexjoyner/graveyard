module.exports = function(post_id, user_id, created_at, vote_type_id){
	return {
		params: [post_id, user_id, created_at, vote_type_id],
		string: `
		INSERT INTO votes
			(post_id, user_id, created_at, vote_type_id)
		VALUES 
			(  $1,       $2,      $3,           $4);`
	}
}