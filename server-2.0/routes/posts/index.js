module.exports = function (app) {
	// File Dependencies
	// ------------------------
	var get_hot_issues = require('./get_hot_issues');
	var get_top_issues = require('./get_top_issues');
	var get_topic_issues = require('./get_topic_issues');
	var get_post_detail = require('./get_post_detail');
	var post_new_post = require('./post_new_post');
	var post_new_post_link = require('./post_new_post_link');
	var delete_post_by_id = require('./delete_post_by_id');
	var post_update_post = require('./post_update_post');
	var get_search_posts = require('./get_search_posts');
	// Routes
	// ------------------------
	app
		.use('/posts/hot', get_hot_issues)
		.use('/posts/top', get_top_issues)
		.use('/posts/topic', get_topic_issues)
		.use('/new/post', post_new_post)
		.use('/new/postlink', post_new_post_link)
		.use('/post/detail', get_post_detail)
		.use('/posts/remove', delete_post_by_id)
		.use('/posts/update', post_update_post)
		.use('/posts/search', get_search_posts);
};