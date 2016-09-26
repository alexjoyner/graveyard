var should_cache = false;
export function check_cache(req, key, callback, re_cache_flag) {
	/* Don't get cache if trying to reset cache on update / delete*/
	var results = (!re_cache_flag && should_cache)? req.mtCache.get(key) : null;
	if (!results) {
		callback(null, null);
		return;
	}
	console.log('FROM CACHE');
	callback(null, results);
}