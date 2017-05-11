'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.expect = exports.renderComponent = undefined;

var _jsdom = require('jsdom');

var _jsdom2 = _interopRequireDefault(_jsdom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _chaiJquery = require('chai-jquery');

var _chaiJquery2 = _interopRequireDefault(_chaiJquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// set up test environment to run like a browser in the command line
global.document = _jsdom2.default.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
var $ = (0, _jquery2.default)(global.window);

// Fixes navigator is not defined
global.navigator = {
	userAgent: 'node.js'
};

// build 'renderComponent'helper that should render a giver react class
function renderComponent(ComponentClass, props, state, mockReducers) {
	var componentInstance = _testUtils2.default.renderIntoDocument(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: (0, _redux.createStore)(mockReducers, state) },
		_react2.default.createElement(ComponentClass, props)
	));

	return $(_reactDom2.default.findDOMNode(componentInstance)); // produces html
}

// Build helper from simulating events
$.fn.simulate = function (eventName, value) {
	if (value) this.val(value);
	_testUtils2.default.Simulate[eventName](this[0]);
};

// Set up chai-jquery
(0, _chaiJquery2.default)(_chai2.default, _chai2.default.util, $);

exports.renderComponent = renderComponent;
exports.expect = _chai.expect;