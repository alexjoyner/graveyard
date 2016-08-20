module.exports = function (req, key, callback) {
	var results = req.mtCache.get(key);
	if (!results) {
		callback(null, null);
		return;
	}
	console.log('FROM CACHE');
	callback(null, results);
};