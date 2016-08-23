module.exports = function(app){
	// File Dependencies
	// ------------------------
	var get_my_favorites    = require('./get_my_favorites');
	app.use('/favorites/my', get_my_favorites);

	var delete_aka_unfavorite    = require('./delete_aka_unfavorite');
	app.use('/favorites/unfavorite', delete_aka_unfavorite);

	var post_aka_favorite    = require('./post_aka_favorite');
	app.use('/favorites/create', post_aka_favorite);
};