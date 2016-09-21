export default function(searchStr) {
	let validCases = ['should', 'would', 'will', 'could', 'are', 'is', 'can', 'shall', 'did', 'am', 'do']
	let firstword = searchStr.match(/^([\w\-]+)/)[0].toLowerCase();
	return validCases.indexOf(firstword) > -1;
}