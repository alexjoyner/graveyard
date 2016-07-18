module.exports = function(req, res, next) {
    var info = req.body;
    var user = req.decoded;
    req.roQueryParams = [user.id, info.tag_id];
    req.roQueryString = `
    INSERT INTO "favorites-user_tag_xref"
        (user_id, tag_id)
    SELECT $1, $2
    WHERE
        NOT EXISTS (
            SELECT user_id FROM "favorites-user_tag_xref" WHERE user_id = $1 AND tag_id = $2
        );`;
    next();
}