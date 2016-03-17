// Clear the console on nodemon restart
process.stdout.write('\033c');

// Dependencies
var express = require('express'),
    app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');

//Connect to database
// mongoose.connect('mongodb://roscoDB:1_Password@ds051534.mongolab.com:51534/swipehaul-db');
mongoose.connect('mongodb://localhost:27017/metaTruth');
//Access headers
require('./config/accessHeaders.js')(app);

// global middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
require('./routes/routes.js')(app);



var port = (process.env.PORT || 9000);
// Start an express server
http.listen(port, function(err) {
    'use strict';
    if (err) throw err;
    console.log('App running on port 9000');
});