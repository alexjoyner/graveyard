// Clear the console on nodemon restart
process.stdout.write('\033c');

// Dependencies
var express = require('express'),
    app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var passport = require('passport');
var multer = require('multer'); //for handling multipart/form-data

//multer extension
var upload = multer({
    dest: 'temp/images'
});

//Connect to database
// mongoose.connect('mongodb://roscoDB:1_Password@ds051534.mongolab.com:51534/swipehaul-db');
mongoose.connect('mongodb://localhost:27017/swipeHaul');
//Access headers
require('./config/accessHeaders.js')(app);
require('./config/passport.js')(passport);

// global middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(upload.single('file'));
// Make io accessible to our router
app.use(function(req, res, next) {
    'use strict';
    req.io = io;
    next();
});

require('./routes/routes.js')(app, passport);

// TEMPORARY SOCKET IO IMPLEMTATION !!! TAKE THIS SOMEWHERE ELSE
io.on('connection', function(socket) {
    'use strict';
    console.log('a user connected');
    // Make the socket accessible to our router
    app.use(function(req, res, next) {
        req.socket = socket;
        next();
    });
    socket.on('CreateRoom', function(roomName) {
        console.log('New Room: ', roomName);
        socket.join(roomName);
    });
    socket.on('JoinRoom', function(roomName) {
        console.log('Joining Room', roomName);
        socket.join(roomName);
    });
    socket.on('LeaveRoom', function(roomName) {
        socket.leave(roomName);
    });
    socket.on('disconnect', function(){
        console.log('User disconnected');
    });
});


var port = (process.env.PORT || 9000);
// Start an express server
http.listen(port, function(err) {
    'use strict';
    if (err) throw err;
    console.log('App running on port 9000');
});