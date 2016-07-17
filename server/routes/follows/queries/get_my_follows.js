module.exports = function(req, res, next) {
    var info = req.decoded;
    req.roQueryParams = [info.id];
    req.roQueryString = `
    SELECT 
        post_id
    FROM 
        follows
    WHERE
        user_id = $1;`;
    next();
}