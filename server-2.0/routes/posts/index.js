module.exports = function(app){
	// File Dependencies
	 // ------------------------
	 var get_hot_issues    = require('./get_hot_issues');
	 var get_top_issues    = require('./get_top_issues');
	 var get_topic_issues    = require('./get_topic_issues');
	 var get_post_by_id    = require('./get_post_by_id');
	 var post_new_post    = require('./post_new_post');
	 // Routes
	 // ------------------------
	 app
	 	.use('/posts/hot', get_hot_issues)
		.use('/posts/top', get_top_issues)
		.use('/posts/topic', get_topic_issues)
		.use('/new/post', post_new_post)
		.use('/post/', get_post_by_id);
};