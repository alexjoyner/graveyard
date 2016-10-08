export function is_num_of_words(searchStr, numWords) {
	if(numWords > 1){
		numWords --;
	}
	let numWordCheck = new RegExp('^((?:\\S+\\s+){'+numWords+'}\\S+)', 'g');
	return (searchStr.match(numWordCheck) !== null);
}
