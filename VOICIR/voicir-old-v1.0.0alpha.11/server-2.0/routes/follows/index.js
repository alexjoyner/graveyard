module.exports = function(app){
	// File Dependencies
	// ------------------------
	var get_my_follows    = require('./get_my_follows');
	app.use('/follows/my', get_my_follows);

	var delete_aka_unfollow    = require('./delete_aka_unfollow');
	app.use('/follows/unfollow', delete_aka_unfollow);

	var post_aka_follow    = require('./post_aka_follow');
	app.use('/follows/follow', post_aka_follow);
};