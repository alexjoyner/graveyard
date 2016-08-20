var config = require('../config/config.js');
// ELASTIC SEARCH IMPLEMENTATION
var elasticsearch = require('elasticsearch');
var conString = config.searchdb;

var client = new elasticsearch.Client({
    host: conString
    //log: 'trace'
});

module.exports = {
    'testPing': function () {
        console.log('Uncomment elastic query testPing to connect to elasticsearch.')
        /*client.ping({
            // ping usually has a 3000ms timeout
            requestTimeout: Infinity,
            // undocumented params are appended to the query string
            hello: "elasticsearch!"
        }).then(
            function () {
                console.log('All is well with elasticSearch: ' + conString);
            }, function () {
                console.trace('elasticsearch cluster is down!');
            });*/
    }
}