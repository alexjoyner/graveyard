module.exports = function (req, key, callback, re_cache_flag) {
				/* Don't get cache if trying to reset cache on update / delete*/
	var results = (!re_cache_flag)? req.mtCache.get(key) : null;
	if (!results) {
		callback(null, null);
		return;
	}
	console.log('FROM CACHE');
	callback(null, results);
};