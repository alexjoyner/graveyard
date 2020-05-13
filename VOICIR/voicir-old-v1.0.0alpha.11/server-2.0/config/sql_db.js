var config = require('../config/config.js');
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;
var Q = require('q');
function testPing(){
	//this initializes a connection pool
	//it will keep idle connections open for a (configurable) 30 seconds
	//and set a limit of 10 (also configurable)
	pg.connect(conString, function(err, client, done) {
		done();
		if (err) {
			return console.error('error fetching client from pool', err);
		} else {
			console.log('CONNECTED TO: ' + conString);
		}
	});
}
testPing();


function pg_query(text, values, cb) {
	pg.connect(conString, function(err, client, done) {
		client.query(text, values, function(err, result) {
			done();
			cb(err, result);
		})
	});
}
export {pg_query};