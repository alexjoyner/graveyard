module.exports = function(searchTerm){
	var searchArray = searchTerm.toLowerCase().split(' ');
	var preffixMatches = [];
	for (var i = 0; i < searchArray.length; i ++) {
		preffixMatches.push({
			"prefix": {
				"title": searchArray[i]
			}
		})
	}
	return {
		searchInfo: {"should": preffixMatches}
	}
};