export default function (searchStr) {
	let lwrStr = searchStr.toLowerCase();
	let test =
		/* the word YOU is contained in the string*/
		(lwrStr.indexOf(' should') !== -1);
	console.log(test);
	return test;
}