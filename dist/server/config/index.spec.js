'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('App Config', function () {
	it('Should create all initialize all middleware', function () {
		(0, _.init)(_express2.default);
	});
});