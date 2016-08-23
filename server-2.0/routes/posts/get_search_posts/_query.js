module.exports = function(searchTerm, post_type_id){
	var searchArray = searchTerm.split(' ');
	var preparedString = searchArray[0];
	for (var i = 1; i < searchArray.length; i ++) {
		preparedString += ':* & ' + searchArray[i];
	}
	return {
		params: [preparedString, post_type_id],
		string: `
			SELECT 
				*
			FROM 
				posts
			WHERE 
				title
			@@
				to_tsquery($1)
			AND
				post_type_id = $2
			AND
				is_deleted = false
			LIMIT
				5
			;`
	}
}