module.exports = function(app){
	// File Dependencies
	// ------------------------
	var local_login = require('./local_login');
	app.use('/auth/login', local_login);

	// var delete_aka_unfavorite    = require('./delete_aka_unfavorite');
	// app.use('/favorites/unfavorite', delete_aka_unfavorite);
};