// Clear the console on nodemon restart
process.stdout.write('\033c');

// Dependencies
var express = require('express'),
    app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');

var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};
//Connect to database
mongoose.connect('mongodb://rosco9awj:1_Password@ds025459.mlab.com:25459/metatruth', options);
//mongoose.connect('mongodb://localhost:27017/metaTruth');
//Access headers
require('./server/config/accessHeaders.js')(app);

// Send files from angular
app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));

var renderIndex = (req: express.Request, res: express.Response) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
}

app.get('/*', renderIndex);

// global middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
require('./server/routes/routes.js')(app);


var port = (process.env.PORT || 9000);
// Start an express server
http.listen(port, function(err) {
    'use strict';
    if (err) throw err;
    console.log('App running on port 9000');
});