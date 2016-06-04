// Clear the console on nodemon restart
process.stdout.write('\033c');
// Dependencies
var express = require('express'),
    app = express();
var http = require('http').Server(app);

// Configurations files
// ------------------------------
var config = require('./server/config/config.js');
require('./server/config/init-livereload.js')(config.db);   // init_Livereload (Dev)
require('./server/config/init-db.js')(config.db);           // init_Postgres
require('./server/config/accessHeaders.js')(app);           // Access headers
require('./server/config/passport.js')();                   // Initialize Passport
require('./server/config/globalMiddleware.js')(app);        // Global Middleware
require('./server/config/init-socketIO.js')(app, http);     // init_SocketIO
// Route handler
// --------------------------------
require('./server/routes/routes.js')(app);

/*
    !!! Static files must come after routes
*/
require('./server/config/static-files.js')(app);            // setup static files

var port = (process.env.PORT || 9000);
// Start an express server
http.listen(port, function(err) {
    'use strict';
    if (err) throw err;
    console.log('App running on port ' + port);
});