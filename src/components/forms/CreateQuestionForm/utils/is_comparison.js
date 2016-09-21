export default function(searchStr) {
	let lwrStr = searchStr.toLowerCase();
	return (lwrStr.indexOf(' or') !== -1);
}