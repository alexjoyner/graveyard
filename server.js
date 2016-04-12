// Clear the console on nodemon restart
process.stdout.write('\033c');

// Dependencies
var express = require('express'),
    app = express();
var path = require('path');
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var passport = require('passport');
var config = require('./server/config/config.js');
var ENV = process.env.NODE_ENV || 'development'; // development || production
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;

//this initializes a connection pool
//it will keep idle connections open for a (configurable) 30 seconds
//and set a limit of 10 (also configurable)
pg.connect(conString, function(err, client, done) {
  if(err) {
    return console.error('error fetching client from pool', err);
  }else {
  	console.log('CONNECTED TO! \n' + config.db);
  }
});

// END MY SQL IMPLEMENTATION

//Access headers
require('./server/config/accessHeaders.js')(app);
require('./server/config/passport.js')(passport);

// global middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());
require('./server/routes/routes.js')(app);

console.log('Enviorment: ', ENV);
if(ENV === 'production'){
	// Send files from angular
	app.use(express.static(path.resolve(__dirname, 'client')));

	var renderIndex = function(req, res){
	    res.sendFile(path.resolve(__dirname, 'client/index.html'));
	}
	// ANY ROUTE THAT ISN'T AN API ROUTE, send the homepage
	app.get('*', renderIndex);	
}

var port = (process.env.PORT || 9000);
// Start an express server
http.listen(port, function(err) {
    'use strict';
    if (err) throw err;
    console.log('App running on port 9000');
});