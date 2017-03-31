var bodyParser = require('body-parser');
var morgan = require('morgan');
module.exports = function(app){
	// global middleware
	app.use(bodyParser.json());
	app.use(morgan('dev'));
};
