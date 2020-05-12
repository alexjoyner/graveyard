'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _test_helper = require('./test_helper');

var _redux = require('redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var testVal = 0;
var testComponent = function testComponent(props) {
	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(
			'h1',
			null,
			'TESTING'
		),
		_react2.default.createElement('textarea', null),
		_react2.default.createElement(
			'button',
			{ onClick: function onClick() {
					return testVal = 30;
				} },
			'test btn'
		)
	);
};
var test_reducer = function test_reducer() {
	return {
		testData: true
	};
};
var mockReducers = (0, _redux.combineReducers)({
	test_reducer: test_reducer
});

describe('Test Helper', function () {
	var component = void 0;
	beforeEach(function () {
		component = (0, _test_helper.renderComponent)(testComponent, {}, {}, mockReducers);
	});
	it('Should create a component', function () {
		(0, _test_helper.expect)(component).to.contain('TESTING');
	});
	it('Shouldn\'t have trouble simulating a click', function () {
		component.find('button').simulate('click', 0);
		(0, _test_helper.expect)(testVal).to.equal(30);
	});
	it('should allow for text input', function () {
		var textArea = component.find('textarea');
		textArea.simulate('change', 'test comment');
		(0, _test_helper.expect)(textArea).to.have.value('test comment');
	});
});