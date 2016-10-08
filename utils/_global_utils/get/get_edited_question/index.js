import {get_yes_no_options} from '../get_yes_no_options';
import {get_first_word} from '../get_first_word';
export function get_edited_question(original, base_statement, index){
	let newThing = base_statement.split(' ');
	let yN_option = ' __' + get_yes_no_options(get_first_word(original)) + '__ ';
	newThing.splice(index || 2, 0, yN_option);
	return newThing.join(' ');
}
