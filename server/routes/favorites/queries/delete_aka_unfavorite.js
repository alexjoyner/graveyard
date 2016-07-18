module.exports = function(req, res, next) {
    var info = req.params;
    var user = req.decoded;
    req.roQueryParams = [user.id, info.tagId];
    req.roQueryString = `
    DELETE FROM 
        "favorites-user_tag_xref"
    WHERE
        user_id = $1 AND tag_id = $2;`;
    next();
}