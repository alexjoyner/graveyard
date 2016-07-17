module.exports = function(req, res, next) {
    var info = req.decoded;
    req.roQueryParams = [info.id];
    req.roQueryString = `
    SELECT 
        *
    FROM 
        votes
    WHERE
        user_id = $1;`;
    next();
}