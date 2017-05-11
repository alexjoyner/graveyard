'use strict';

var _chai = require('chai');

var _ = require('./');

describe('addTwoNumbers', function () {
	it('Should add two numbers', function () {
		(0, _chai.expect)((0, _.addTwoNumbers)(2, 5)).to.equal(7);
	});
});