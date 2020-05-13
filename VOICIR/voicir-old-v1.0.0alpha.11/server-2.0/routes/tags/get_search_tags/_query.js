module.exports = function(searchTerm, tag_type){
	return {
		params: [searchTerm, tag_type],
		string: `
			SELECT 
				*
			FROM 
				tags
			WHERE 
				tag_name
			ILIKE
				$1
			AND
				tag_type_id = $2
			LIMIT
				5
			;`
	}
}