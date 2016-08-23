module.exports = function(user_id, post_id){
	return {
		params: [user_id, post_id],
		string: `
		INSERT INTO follows
			(user_id, post_id)
		SELECT $1, $2
		WHERE
			NOT EXISTS (
				SELECT user_id FROM follows WHERE user_id = $1 AND post_id = $2
			);`
	}
};