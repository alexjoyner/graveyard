import {get_question_type} from '../../../../utils';
import {get_first_word} from '../../../../utils';
import {get_valid_yes_no_cases} from '../../../../utils';
module.exports = function(post, user){
	let info = {
		params: [
			/*user.id*/ 10,
			post.title,
			post.yn_index,
			get_valid_yes_no_cases().indexOf(get_first_word(post.title).toLowerCase()) + 1,
			post.detail,
			get_question_type(
				post.title,
				post.source_type_id).type,
			post.source,
			post.source_type_id,
			new Date
		],
		string: `
		INSERT INTO
			posts (
			  owner_user_id,
			  title,
			  yn_index,
			  yn_pair_words_id,
			  detail,
			  post_type_id,
			  source,
			  source_type_id,
			  created_at)
			VALUES (
			  $1,$2,$3,$4,$5,$6,$7,$8, $9)
		RETURNING
			*;
		`
	};
	console.log(info);
	return info;
};
