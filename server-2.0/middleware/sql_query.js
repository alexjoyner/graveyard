var config = require('../config/config.js');
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;
var Q = require('q');
module.exports = {
    'testPing': function(){
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
    },
    'getClient': function(){
        var deffered = Q.defer();
        //this initializes a connection pool
        //it will keep idle connections open for a (configurable) 30 seconds
        //and set a limit of 10 (also configurable)
        pg.connect(conString, function(err, client, done) {
            if (err) {
                deferred.reject(new Error(err));
            } else {
                deffered.resolve({
                    client: client,
                    done: done //Call done after you make your last query to close the client
                });
            }
        });
        return deffered.promise;
    },
    'commonQuery': function(req, res, next) {
        pg.connect(conString, function(err, client, done) {
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            client.query(req.roQueryString, req.roQueryParams, function(err, result) {
                //call `req.roDone()` to release the client back to the pool
                req.roConClient = client;
                req.roDone = done;
                if (err) throw err;
                req.roInfo = result;
                next();
            });
        });

    },
    'getDB_Client': function(req, res, next) {
        pg.connect(conString, function(err, client, done) {
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            req.roConClient = client;
            req.roDone = done;
            next();
        });
    }
}