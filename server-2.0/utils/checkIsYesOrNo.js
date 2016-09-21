module.exports = function(searchStr) {
	var validCases = ['should', 'would', 'will', 'could', 'are', 'is', 'can', 'shall', 'did', 'am', 'do']
	var firstword = searchStr.match(/^([\w\-]+)/)[0].toLowerCase();
	return validCases.indexOf(firstword) > -1;
}