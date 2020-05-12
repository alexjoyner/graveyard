'use strict';

var _chai = require('chai');

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('HTML-elements-plugin', function () {
	it('Should create an existing Plugin', function () {
		var plugin = new HtmlWebpackPlugin({
			template: './test.html',
			chunksSortMode: 'dependency'
		});
		(0, _chai.expect)(plugin).to.be.exist;
	});
});