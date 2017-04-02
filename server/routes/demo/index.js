/*
* Every route has it's own index.html file. That file serves as the base for setting
* up all the GET, POST, and DELETE routes in this category.
* For example: Here we are routing to the post_new_preorder route in our main preorder route*/

module.exports = function (app) {
	// File Dependencies
	// ------------------------
	var post_new_preorder = require('./post_new_preorder');
	// Routes
	// ------------------------
	app
		.use('/new/preorder', post_new_preorder);
};
