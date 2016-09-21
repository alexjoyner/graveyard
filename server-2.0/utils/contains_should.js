module.exports = function (searchStr) {
	var lwrStr = searchStr.toLowerCase();
	console.log(lwrStr);
	return (lwrStr.indexOf('should') !== -1);
}