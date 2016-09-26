import {validCases} from '../get_valid_yes_no_cases';
import {is_evenly_divisible} from '../is_evenly_divisible';
export function get_yes_no_options(word) {
	let index = validCases().indexOf(word);
	if (word === validCases()[0] || word === validCases()[1]) {
		return validCases()[0] + '/' + validCases()[1];
	}
	if (word === 'am') {
		return 'am/am not';
	}
	if (is_evenly_divisible(index, 2)) {
		return validCases()[index] + '/' + validCases()[index + 1];
	} else {
		return validCases()[index - 1] + '/' + validCases()[index];
	}
}
