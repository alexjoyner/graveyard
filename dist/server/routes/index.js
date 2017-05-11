'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.configRoutes = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configRoutes = function configRoutes(express, app, BASE_DIR) {
	app.use(express.static(_path2.default.join(BASE_DIR, '/docs')));
	app.use('/client', express.static(_path2.default.join(BASE_DIR, 'docs')));
	app.get('*', function (req, res) {
		res.sendFile(_path2.default.join(BASE_DIR, 'docs/index.html'));
	});

	/* ERROR HANDLER */
	app.use(function (err, req, res, next) {
		console.log('ERROR');
		res.status(err.status).send(err.message);
	});
};

exports.configRoutes = configRoutes;