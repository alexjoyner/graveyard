module.exports = function(req, res, next) {
    req.roQueryParams = [];
    req.roQueryString = `
	SELECT  FROM posts;`;
    next();
}