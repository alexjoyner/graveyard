var check_cache = require('../../../utils/checkCache');
var sortPosts = require('../../../utils/sortPosts');
var get_all_issues = require('../get_all_issues/_core_function');
/* LOCAL VARS*/
var client, cache_location, sortedPosts;

module.exports = function (req, callback) {
	client = req.roConClient;
	cache_location = 'top_feed';

	check_cache(req, cache_location, function(err, cached_test){
		req.roDone();
		if(cached_test){
			callback(null, cached_test);
			return;
		}
		/* Get from db*/
		get_all_issues(req, function(err, issues){
			if(err) throw err;
			if (!issues[0]) {
				callback(null, []);
				return;
			}
			sortedPosts = sortPosts.topSort(issues);
			req.mtCache.set(cache_location, issues);
			callback(null, sortedPosts);
		});

	});
};