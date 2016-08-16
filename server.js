// Clear the console on nodemon restart
process.stdout.write('\033c');
// Dependencies
var express = require('express'),
    app = express();
var http = require('http').Server(app);


// Configurations files
// ------------------------------
var config = require('./server/config/config.js');
require('./server/config/accessHeaders.js')(app);           // Access headers
require('./server/config/passport/_main.js')();             // Initialize Passport
require('./server/config/globalMiddleware.js')(app);        // Global Middleware
//require('./server/config/init-livereload.js')(config.db);   // init_Livereload (Dev only)
require('./server/middleware/sql_query.js').testPing();     // Test postgres_connection
require('./server/middleware/elastic_query.js').testPing();     // Test elasticsearch_connection
//require('./server/config/init-socketIO.js')(app, http);     // init_SocketIO

// (Dev mode only) Start live-reload
if (config.ENV !== 'production') {
    console.log('Starting livereload server');
    var livereload = require('livereload'),
        liveServer = livereload.createServer();
    liveServer.watch([__dirname + '/server/**.*']);
}

// Route handler
// --------------------------------
require('./server/routes/routes.js')(app);

/*
    !!! Static files must come after routes
*/
if (config.ENV === 'production') {
    require('./server/config/static-files.js')(app);            // setup static files
}
var port = (process.env.PORT || 8080);
// Start an express server
http.listen(port, function(err) {
    'use strict';
    if (err) throw err;
    console.log('App running on port ' + port);
});
