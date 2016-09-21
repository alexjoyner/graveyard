var checkIsYesOrNo = require('./checkIsYesOrNo');
var contains_should = require('./contains_should');
var is_comparison = require('./is_comparison');
var isOneWord = require('./isNumOfWords').isOneWord;
var isThreeWords = require('./isNumOfWords').isThreeWords;
module.exports = function (daQ) {
	const result = {};
	result.title = undefined;

	/*
	 * If there is no question or there isn't at least 2 characters to check*/
	if (!daQ || !isOneWord(daQ)) {
		// No alerts raised yet
		result.title = 'Enter your question';
		return result;
	}
	/*
	 * If the question isn't a yes or no*/
	if (!checkIsYesOrNo(daQ)) {
		/*
		 * If the question isn't at least 3 words (A complete sentence). Ex: Should I run? */
		if (!isThreeWords(daQ)) {
			result.title = "Hey! Your question needs to be at least 3 words!";
			return result;
		}
		if (!contains_should(daQ)) {
			// No alerts raised yet
			result.title = 'Non yes/no questions MUST contain the word should';
			return result;
		}
		/*
		 * Everything checked out but the last character isn't a question mark*/
		if (daQ[daQ.length - 1] !== '?') {
			result.title = 'Awesome, now just top it of with a question mark when your finished to move on!';
			return result;
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
	if (!isThreeWords(daQ)) {
		result.title = "Hey! Your question needs to be at least 3 words!";
		return result;
	}

	/*
	 * If the question is a comparison */
	if (is_comparison(daQ)) {
		result.title =
			`Comparison must be framed as open questions. \n Ex: "Should I use Splenda or Stevia?" \n
				should be changed to \n "What's the best sweetener?"`;
		return result;
	}

	return {
		success: true,
		type: 3
	};
}