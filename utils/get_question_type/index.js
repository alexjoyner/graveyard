import {is_yes_no} from '../is_yes_no';
import {is_num_of_words} from '../is_num_of_words';
import {contains_should} from '../contains_should';
import {contains_or} from '../contains_or';
export function get_question_type(daQ, source_type_id) {
	const ERRORS = {};
	ERRORS.title = undefined;
	/*
	 * If there is no question or there isn't at least 2 characters to check*/
	if (!daQ || !is_num_of_words(daQ, 1)) {
		// No alerts raised yet
		ERRORS.title = 'Enter your question';
		return ERRORS;
	}
	if(source_type_id){
		return {
			success: true,
			type: 4
		}
	}
	/*
	 * If the question isn't a yes or no*/
	if (!is_yes_no(daQ)) {
		/*
		 * If the question isn't at least 3 words (A complete sentence). Ex: Should I run? */
		if (!is_num_of_words(daQ, 3)) {
			ERRORS.title = "Hey! Your question needs to be at least 3 words!";
			return ERRORS;
		}
		if (!contains_should(daQ)) {
			// No alerts raised yet
			ERRORS.title = 'Non yes/no questions MUST contain the word should';
			return ERRORS;
		}
		/*
		 * Everything checked out but the last character isn't a question mark*/
		if (daQ[daQ.length - 1] !== '?') {
			ERRORS.title = 'Awesome, now just top it of with a question mark when your finished to move on!';
			return ERRORS;
		}

		return {
			success: true,
			type: 1
		};
	}

	if (contains_should(daQ)) {
		return{
			success: true,
			type: 2
		}
	}

	/*
	 * If the question isn't at least 3 words (A complete sentence). Ex: Should I run? */
	if (!is_num_of_words(daQ, 3)) {
		ERRORS.title = "Hey! Your question needs to be at least 3 words!";
		return ERRORS;
	}

	/*
	 * If the question is a comparison */
	if (contains_or(daQ)) {
		ERRORS.title =
			`Comparison must be framed as open questions. \n Ex: "Should I use Splenda or Stevia?" \n
				should be changed to \n "What's the best sweetener?"`;
		return ERRORS;
	}

	return {
		success: true,
		type: 3
	};
}
