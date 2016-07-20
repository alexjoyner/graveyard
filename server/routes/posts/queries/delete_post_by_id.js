module.exports = function(req, res, next) {
	req.roQueryParams = [req.params.postId];
    req.roQueryString = `
	UPDATE
		posts
	SET
		is_deleted = true
	WHERE
	    posts._id = $1::int
	RETURNING 
	    _id, point_type_id, post_type_id, parent_id, owner_user_id;
	`;
	next();
}