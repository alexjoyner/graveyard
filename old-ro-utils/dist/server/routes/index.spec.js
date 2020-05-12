'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _ = require('./');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _express2.default.Router();


describe('Routes config', function () {
	it('Should initialize all te base routes', function () {
		(0, _.configRoutes)(_express2.default, app, '.');
	});
});