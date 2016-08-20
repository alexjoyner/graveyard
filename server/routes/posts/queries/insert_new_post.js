var Q = require('q');
var pg = require('pg');
module.exports = function(client, post, user) {
	var deffered = Q.defer();
	var postInfo = post;
	roQueryParams = [postInfo.privQ, user.id, postInfo.title, postInfo.detail, postInfo.post_type_id, postInfo.parent_id,
		postInfo.point_type_id, postInfo.source, postInfo.source_type_id, new Date
	];
	roQueryString = `
	INSERT INTO
	  posts (
	  private_question, owner_user_id,title,detail,post_type_id,parent_id,point_type_id,source,source_type_id,created_at)
	VALUES (
	  $1,$2,$3,$4,$5,$6,$7,$8,$9, $10)
	RETURNING
	    *;
	`;
	client.query(roQueryString, roQueryParams, function(err, result) {
		if(err) deferred.reject(new Error(err));
		deffered.resolve(result.rows[0]);
	});
	return deffered.promise;
};