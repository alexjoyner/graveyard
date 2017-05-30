'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ping = undefined;

var _client = require('./client');

var ping = _client.client.ping({
	// ping usually has a 3000ms timeout
	requestTimeout: 3000
}, function (error) {
	if (error) {
		console.trace('elasticsearch cluster is down!');
	} else {
		console.log('All is well with elasticsearch');
	}
});

exports.ping = ping;