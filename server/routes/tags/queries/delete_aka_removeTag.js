module.exports = function(req, res, next) {
    var info = req.params;
    req.roQueryParams = [info.tagId, info.postId];
    req.roQueryString = `
    DELETE FROM 
        post_tags_xref
    WHERE
        tag_id = $1 AND post_id = $2;`;
    next();
}