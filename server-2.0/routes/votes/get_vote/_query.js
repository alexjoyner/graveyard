module.exports = function(post_id, user_id){
	return {
		params: [post_id, user_id],
		string: `
        SELECT
            _id, vote_type_id
        FROM
            votes
        WHERE
            post_id = $1
        AND
            user_id = $2;`
	}
}