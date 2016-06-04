// Dependencies
var pg = require('pg');


/*
	Function to configure a postgresql database
	-------------------------------------------
*/
module.exports = function(url){
		var conString = url;

		//this initializes a connection pool
		//it will keep idle connections open for a (configurable) 30 seconds
		//and set a limit of 10 (also configurable)
		pg.connect(conString, function(err, client, done) {
		    if (err) {
		        return console.error('error fetching client from pool', err);
		    } else {
		        console.log('CONNECTED TO: ' + conString);
		    }
		});
}