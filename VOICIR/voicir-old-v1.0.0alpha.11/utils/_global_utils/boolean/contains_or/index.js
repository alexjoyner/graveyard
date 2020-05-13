export function contains_or(searchStr) {
	let lwrStr = searchStr.toLowerCase();
	return (lwrStr.indexOf(' or') !== -1);
}
