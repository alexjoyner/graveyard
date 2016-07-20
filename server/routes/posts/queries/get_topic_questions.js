module.exports = function(req, res, next) {
    var info = req.params;
    req.roQueryParams = [info.tagId];
    req.roQueryString = `
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
    next();
}