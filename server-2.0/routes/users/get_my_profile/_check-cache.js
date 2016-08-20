module.exports = function (req, res, next) {
	var results = req.mtCache.get('profile_' + req.decoded.id);
	if (!results) {
		return next();
	}
	console.log('FROM CACHE');
	res.status(200).send(results).end();
};