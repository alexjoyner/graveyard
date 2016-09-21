import checkIsYesOrNo from '../utils/checkIsYesOrNo';
import contains_you from '../utils/contains_you';
import contains_should from '../utils/contains_should';
import is_comparison from '../utils/is_comparison';
import {isOneWord, isThreeWords} from '../utils/isNumOfWords';
export default function (values) {
	const errors = {};
	let daQ = values.title; // daQ (The question)
	errors.title = undefined;

	/*
	 * If there is no question or there isn't at least 2 characters to check*/
	if (!daQ || !isOneWord(daQ)) {
		// No alerts raised yet
		errors.title = 'Enter your question';
		return errors;
	}
	/*
	 * If the question isn't a yes or no*/
	if (!checkIsYesOrNo(daQ)) {
		/*
		 * If the question isn't at least 3 words (A complete sentence). Ex: Should I run? */
		if (!isThreeWords(daQ)) {
			errors.title = "Hey! Your question needs to be at least 3 words!";
			return errors;
		}
		if (!contains_should(daQ)) {
			// No alerts raised yet
			errors.title = 'Non yes/no questions MUST contain the word should';
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

	/*
	 * If the question isn't at least 3 words (A complete sentence). Ex: Should I run? */
	if (!isThreeWords(daQ)) {
		errors.title = "Hey! Your question needs to be at least 3 words!";
		return errors;
	}

	/*
	 * If the question is a comparison */
	if (is_comparison(daQ)) {
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