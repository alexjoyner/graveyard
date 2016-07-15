module.exports = function(req, res, next) {
    var info = req.params;
    req.roQueryParams = [info.userId, info.postId];
    req.roQueryString = `
    DELETE FROM 
        follows
    WHERE
        user_id = $1 AND post_id = $2;`;
    next();
}