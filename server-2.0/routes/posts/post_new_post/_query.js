var validateQ = require('../../../utils/validate_question');

module.exports = function(post, user){
	return {
		params: [user.id, post.title, post.detail, validateQ(post.title).type, post.source, post.source_type_id, new Date
		],
		string: `
		INSERT INTO
			posts (
			  owner_user_id,
			  title,
			  detail,
			  post_type_id,
			  source,
			  source_type_id,
			  created_at)
			VALUES (
			  $1,$2,$3,$4,$5,$6,$7)
		RETURNING
			*;
		`
	}
};