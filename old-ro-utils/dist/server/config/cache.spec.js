'use strict';

var _chai = require('chai');

var _cache = require('./cache');

describe('Cache Config', function () {
	var node_cache = require('node-cache');
	it('should return a new instance of node cache', function () {
		(0, _chai.expect)(_cache.PRIMARY_CACHE).to.be.instanceOf(node_cache);
	});
});