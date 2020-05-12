'use strict';

var _chai = require('chai');

var _webpackDev = require('./webpack-dev');

describe('Webpack dev', function () {
	it('Should return a configuration object', function () {
		(0, _chai.expect)((0, _webpackDev.webpack_dev_config)('.')).to.be.instanceOf(Object);
	});
});