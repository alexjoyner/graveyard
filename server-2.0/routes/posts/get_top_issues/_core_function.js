import {check_cache, get_page_contents, top_sort_posts} from '../../../../utils/_server_utils';
var get_all_issues = require('../get_all_issues/_core_function');
/* LOCAL VARS*/
const ITEMS_PER_PAGE = 25;
var client, cache_location, page_num, page_items;

module.exports = function (req, callback) {
	client = req.roConClient;
	cache_location = 'top_feed';
	page_num = req.params.page_num;
	check_cache(req, cache_location, function(err, cached_items){
		req.roDone();
		if(cached_items){
			callback(null, get_page_contents(page_num, cached_items, ITEMS_PER_PAGE));
			return;
		}
		/* Get from db*/
		get_all_issues(req, function(err, issues){
			if (err) throw err;
			if (!issues[0]) {
				callback(null, []);
				return;
			}
			page_items = top_sort_posts(issues);
			req.mtCache.set(cache_location, page_items);
			callback(null, get_page_contents(page_num, page_items, ITEMS_PER_PAGE));
		});

	});
};