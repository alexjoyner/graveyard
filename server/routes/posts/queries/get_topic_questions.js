var Q = require('q');
var pg = require('pg');
module.exports = function(client, tagId) {
    var deffered = Q.defer();
    roQueryParams = [tagId];
    roQueryString = `
	SELECT
        *
    FROM
        post_tags_xref ptxf
    LEFT JOIN
        posts p
    ON
        ptxf.post_id = p._id
    WHERE
        ptxf.tag_id = $1
	AND
		p.is_deleted = false;`;
    client.query(roQueryString, roQueryParams, function(err, result) {
        if(err) deferred.reject(new Error(err));
        deffered.resolve(result.rows);
    });
    return deffered.promise;
};