var config = require('../config/config.js');
// POSTGRES IMPLEMENTATION
var pg = require('pg');
var conString = config.db;
module.exports = {
    'commonQuery': function(req, res, next) {
        pg.connect(conString, function(err, client, done) {
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            client.query(req.roQueryString, req.roQueryParams, function(err, result) {
                //call `req.roDone()` to release the client back to the pool
                req.roConClient = client;
                req.roDone = done;
                if(err) throw err;
                req.roInfo = result;
                next();
            });
        });
    }
}