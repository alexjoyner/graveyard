export function isOneWord(searchStr) {
	return (searchStr.match(/^((?:\S+\s+){1}\S+)/) !== null)
}
export function isThreeWords(searchStr) {
	return (searchStr.match(/^((?:\S+\s+){2}\S+)/) !== null)
}