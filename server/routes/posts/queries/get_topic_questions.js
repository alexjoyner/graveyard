module.exports = function(req, res, next) {
    var info = req.params;
    req.roQueryParams = [info.tagId];
    req.roQueryString = `
	SELECT
        *
    FROM
        post_tags_xref
    LEFT JOIN
        posts
    ON
        post_tags_xref.post_id = posts._id
    WHERE
        tag_id = $1;`;
    next();
}