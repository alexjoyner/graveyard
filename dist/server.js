// Clear the console on nodemon restart
process.stdout.write('\033c');

console.log('Enviorment: ', ENV);
// Dependencies
var express = require('express'),
    app = express();
var path = require('path');
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var ENV = process.env.NODE_ENV || 'development'; // development || production
var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};


//Connect to database
mongoose.connect('mongodb://rosco9awj:1_Password@ds025459.mlab.com:25459/metatruth', options);
//mongoose.connect('mongodb://localhost:27017/metaTruth');
//Access headers
require('./server/config/accessHeaders.js')(app);

// global middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
require('./server/routes/routes.js')(app);

if(ENV === 'production'){
	// Send files from angular
	app.use('/client', express.static(path.resolve(__dirname, 'client')));
	app.use('/scripts', express.static(path.resolve(__dirname, 'client/scripts')));
	app.use('/fonts', express.static(path.resolve(__dirname, 'client/fonts')));
	app.use('/libs', express.static(path.resolve(__dirname, 'client/libs')));

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