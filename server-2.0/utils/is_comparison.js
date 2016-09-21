module.exports = function(searchStr) {
	var lwrStr = searchStr.toLowerCase();
	return (lwrStr.indexOf(' or') !== -1);
}