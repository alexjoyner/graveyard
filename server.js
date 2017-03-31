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

// Globally available utilities
export * from './utils'; // misc server utils

// Route handler
// --------------------------------
require(server_base + '/routes')(app);

/*
    !!! Static files must come after routes
*/
if (config.ENV === 'production') {
    require(server_base + '/config/static-files.js')(app);            // setup static files
}
var port = (process.env.PORT || 8080);
// Start an express server
express_http.listen(port, function(err) {
    'use strict';
    if (err) throw err;
    console.log('App running on port ' + port);
});
