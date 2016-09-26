import {get_valid_yes_no_cases} from '../get_valid_yes_no_cases';
export function is_yes_no(searchStr) {
	let validCases = get_valid_yes_no_cases();
	let firstword = searchStr.match(/^([\w\-\']+)/)[0].toLowerCase();
	return validCases.indexOf(firstword) > -1;
}
