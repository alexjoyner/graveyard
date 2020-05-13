import {is_yes_no} from '../../../../../utils';
import {is_num_of_words} from '../../../../../utils';
import {contains_should} from '../../../../../utils';
import {contains_or} from '../../../../../utils';
export default function (values) {
	let errors = {};
	let daQ = values.title; // daQ (The question)
	errors.title = undefined;

	/*
	 * If there is no question or there isn't at least 2 characters to check*/
	if (!daQ || !is_num_of_words(daQ, 1)) {
		// No alerts raised yet
		errors.title = 'Enter your question';
		return errors;
	}
	/*
	 * If the question isn't a yes or no*/
	if (!is_yes_no(daQ)) {
		/*
		 * If the question isn't at least 3 words (A complete sentence). Ex: Should I run? */
		if (!is_num_of_words(daQ, 3)) {
			errors.title = "Hey! Your question needs to be at least 3 words!";
			return errors;
		}
		/*if (!contains_should(daQ)) {
			// No alerts raised yet
			errors.title = 'Non yes/no questions MUST contain the word should';
			return errors;
		}*/
		/*
		 * Everything checked out but the last character isn't a question mark*/
		if (daQ[daQ.length - 1] !== '?') {
			errors.title = 'Awesome, now just top it of with a question mark when your finished to move on!';
			return errors;
		}

		return errors;
	}

	/*
	 * If the question isn't at least 3 words (A complete sentence). Ex: Should I run? */
	if (!is_num_of_words(daQ, 3)) {
		errors.title = "Hey! Your question needs to be at least 3 words!";
		return errors;
	}

	/*
	 * If the question is a comparison */
	if (contains_or(daQ)) {
		errors.title =
			`Comparison must be framed as open questions. \n Ex: "Should I use Splenda or Stevia?" \n
				should be changed to \n "What's the best sweetener?"`;
		return errors;
	}

	/*
	 * Everything checked out but the last character isn't a question mark*/
	if (daQ[daQ.length - 1] !== '?') {
		errors.title = 'Awesome, now just top it of with a question mark when your finished to move on!';
		return errors;
	}

	return errors;
}
