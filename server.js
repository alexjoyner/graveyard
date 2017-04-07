/*
* The server.js file is the root of our server, it is usually located in the root of our
* project directory.
* */


// Dependencies
import express from 'express';
import http from 'http';
let app = express();
let express_http = http.Server(app);
let server_base = './server';

// Configurations files
// ------------------------------
var config = require(server_base + '/config/config.js');
require(server_base + '/config/accessHeaders.js')(app);           // Access headers
require(server_base + '/config/globalMiddleware.js')(app);        // Global Middleware

// utilities
/*
* The utilities folder contains many small functions of code that are made
* to be easily reused throughout any project.  They are optimized for testability
* and re-usability. This export makes all of the utilities globally avilable to our
* server files, so the individual files don't have to be found.*/
export * from './utils'; // misc utils

// Route handler: the source of all our project routes
// ---------------------------------------------------
import {router} from './server/routes';
app.use('/', router);

/*
    !!! Static files must come after routes
*/
if (config.ENV === 'production') {
    require(server_base + '/config/static-files.js')(app);            // setup static files
}

/*
* Serving up our project,
* 1: find the port
* 2: start the server
* */

var port = (process.env.PORT || 8080);
// Start an express server
express_http.listen(port, function(err) {
    'use strict';
    if (err) throw err;
    console.log('App running on port ' + port);
});
