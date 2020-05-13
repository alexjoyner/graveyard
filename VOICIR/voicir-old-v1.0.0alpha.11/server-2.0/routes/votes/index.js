module.exports = function (app) {
	// File Dependencies
	// ------------------------
	var post_mod_vote = require('./post_mod_vote');
	// Routes
	// ------------------------
	app
		.use('/votes/mod', post_mod_vote);
};