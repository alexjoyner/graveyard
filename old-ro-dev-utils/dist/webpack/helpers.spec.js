'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _helpers = require('./helpers');

var helpers = _interopRequireWildcard(_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Webpack Helpers', function () {
	it('should run', function () {
		helpers.hasProcessFlag();
	});
});