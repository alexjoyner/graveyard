module.exports = function(vote_id, vote_type_id){
	return {
		params: [vote_id, vote_type_id],
		string: `
		UPDATE
			votes
		SET 
			vote_type_id = $2
		WHERE
			_id = $1;`
	}
}