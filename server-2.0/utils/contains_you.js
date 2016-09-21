module.exports = function (searchStr) {
	var lwrStr = searchStr.toLowerCase();
	var test =
		/* the word YOU is contained in the string*/
		(lwrStr.indexOf(' you') !== -1);
	return test;
}