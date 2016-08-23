module.exports = function(app){
	var get_search_tags    = require('./get_search_tags');
	app.use('/tags/search', get_search_tags);
};