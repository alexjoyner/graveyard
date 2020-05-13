module.exports = function(array_of_ids){
	return {
		params: [array_of_ids],
		string: `
		SELECT
			*
		FROM
			posts
		WHERE
			_id = ANY($1)`
	}
};