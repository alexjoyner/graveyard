module.exports = function(app){
	// File Dependencies
	// ------------------------
	var get_my_profile    = require('./get_my_profile');
	// Routes
	// ------------------------
	app
		.use('/users/profile', get_my_profile);
};