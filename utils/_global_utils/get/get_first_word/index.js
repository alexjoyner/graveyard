export function get_first_word(str) {
	return str.match(/^([\w\'\-]+)/)[0].toLowerCase();
}
