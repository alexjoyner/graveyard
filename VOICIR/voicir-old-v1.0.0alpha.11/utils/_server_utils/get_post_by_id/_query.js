module.exports = function(id){
	return {
		params: [id],
		string: `
		SELECT
			*
		FROM
			posts
		WHERE
			_id = $1;`
	}
}