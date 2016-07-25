module.exports = function(req, res, next) {
    console.log('MADE IT HERE')
    var info = req.body;
    req.roQueryParams = [info.tag_id, info.post_id];
    req.roQueryString = `
    INSERT INTO post_tags_xref
        (tag_id, post_id)
    SELECT $1, $2
    WHERE
        NOT EXISTS (
            SELECT * FROM post_tags_xref WHERE tag_id = $1 AND post_id = $2
        );`;
    next();
}