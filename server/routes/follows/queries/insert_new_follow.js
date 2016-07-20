module.exports = function(req, res, next) {
    var info = req.body;
    var user = req.decoded;
    req.roQueryParams = [user.id, info.post_id];
    req.roQueryString = `
    INSERT INTO follows
        (user_id, post_id)
    SELECT $1, $2
    WHERE
        NOT EXISTS (
            SELECT user_id FROM follows WHERE user_id = $1 AND post_id = $2
        );`;
    next();
}