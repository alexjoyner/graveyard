import {roCache, get_page_contents, hot_sort_posts, get_all_posts} from '../../../../server';
/* LOCAL VARS*/
const ITEMS_PER_PAGE = 25;
var client, cache_location, page_items, page_num;

module.exports = function (req, callback) {
	client = req.roConClient;
	cache_location = 'top_feed';
	page_num = req.params.page_num;
	roCache.get(cache_location, function(err, cached_items){
		if(cached_items){
			callback(null, get_page_contents(page_num, cached_items, ITEMS_PER_PAGE));
			return;
		}
		/* Get from db*/
		get_all_posts(req, function(err, issues){
			if (err) throw err;
			if (!issues[0]) {
				callback(null, []);
				return;
			}
			page_items = hot_sort_posts(issues);
			roCache.set(cache_location, page_items);
			callback(null, get_page_contents(page_num, page_items, ITEMS_PER_PAGE));
		});

	});
};