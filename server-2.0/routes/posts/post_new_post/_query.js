module.exports = function(post, user){
	return {
		params: [post.privQ, user.id, post.title, post.detail, post.post_type_id, post.parent_id,
			post.point_type_id, post.source, post.source_type_id, new Date
		],
		string: `
		INSERT INTO
		  posts (
		  private_question, owner_user_id,title,detail,post_type_id,parent_id,point_type_id,source,source_type_id,created_at)
		VALUES (
		  $1,$2,$3,$4,$5,$6,$7,$8,$9, $10)
		RETURNING
			*;
		`
	}
};