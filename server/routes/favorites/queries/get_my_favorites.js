module.exports = function(req, res, next) {
    var info = req.decoded;
    req.roQueryParams = [info.id];
    req.roQueryString = `
    SELECT 
        *
    FROM 
        "favorites-user_tag_xref"
    LEFT JOIN
        tags
    ON
        "favorites-user_tag_xref".tag_id = tags._id
    WHERE
        user_id = $1;`;
    next();
}