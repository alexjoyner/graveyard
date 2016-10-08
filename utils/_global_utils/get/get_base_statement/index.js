import {get_first_word} from '../get_first_word';
export function get_base_statement(q) {
	return q
		.split('')
		.splice(0, q.length - 1)
		.splice(get_first_word(q).length, q.length - 1)
		.join('');
}
