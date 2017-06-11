'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.server = exports.app = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _roUtils = require('ro-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var BASE_DIR = _path2.default.resolve(__dirname + '/../');

(0, _roUtils.init)(app);
// this must come before app.get('*') or configRoutes();
// or it will be overwritten
app.use('/', _routes.router);
(0, _roUtils.configRoutes)(_express2.default, app, BASE_DIR);
var port = process.env.PORT || 8000;

var server = app.listen(port, function () {
	console.log('App running on port ' + port);
});

function exitHandler(options) {
	console.log('Stopping Application');
	if (options.exit) process.exit(1);
}

//catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, { exit: true }));
process.on('SIGTERM', exitHandler.bind(null, { exit: true }));

exports.app = app;
exports.server = server;