var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
module.exports = function(app){
	// global middleware
	app.use(bodyParser.json());
	app.use(morgan('dev'));
	app.use(passport.initialize());
};