'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.init = undefined;

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _accessHeaders = require('./accessHeaders');

var _db = require('./db');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function init(app) {
	app.use(_bodyParser2.default.json());
	app.use((0, _morgan2.default)('dev'));
	/* You MUST set the access headers BEFORE the routes*/
	app.use(_accessHeaders.setAccessHeaderMiddleware);
	var port = process.env.PORT || 8000;
	if (!module.parent) {
		app.listen(port, function () {
			console.log('App running on port ' + port);
		});
	}
}

exports.init = init;