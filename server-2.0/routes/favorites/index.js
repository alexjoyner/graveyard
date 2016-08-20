module.exports = function(app){
	// File Dependencies
	// ------------------------
	var get_my_favorites    = require('./get_my_favorites');
	// Routes
	// ------------------------
	app
		.use('/favorites/my', get_my_favorites);
};