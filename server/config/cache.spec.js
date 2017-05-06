import {expect} from 'chai';
import {PRIMARY_CACHE} from './cache';


describe('Cache Config', () => {
	var node_cache = require('node-cache');
	it('should return a new instance of node cache', () => {
		expect(PRIMARY_CACHE).to.be.instanceOf(node_cache);
	});
});
