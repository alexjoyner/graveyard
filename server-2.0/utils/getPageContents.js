/* Function takes an array of page items and finds a certain pages contents*/
module.exports = function (page, array, itemsPerPage) {
	var startPos = ((page) - 1) * itemsPerPage;
	var endPos = startPos + itemsPerPage;
	return array.slice(startPos, endPos);
}