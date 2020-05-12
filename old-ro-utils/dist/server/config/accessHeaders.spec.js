'use strict';

var _chai = require('chai');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _accessHeaders = require('./accessHeaders');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Access Headers Config', function () {
	var callback = void 0,
	    fakeResponse = void 0;
	beforeEach(function () {
		callback = _sinon2.default.spy();
		fakeResponse = {
			setHeader: callback
		};
	});
	it('should set Access-Control-Allow-Origin', function (done) {
		(0, _accessHeaders.setAccessHeaderMiddleware)({}, fakeResponse, function () {
			(0, _chai.expect)(fakeResponse.setHeader.calledWith('Access-Control-Allow-Origin', '*')).to.equal(true);
			done();
		});
	});
	it('should set Access-Control-Allow-Methods', function (done) {
		(0, _accessHeaders.setAccessHeaderMiddleware)({}, fakeResponse, function () {
			(0, _chai.expect)(fakeResponse.setHeader.calledWith('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE')).to.equal(true);
			done();
		});
	});
	it('should set Access-Control-Allow-Headers', function (done) {
		(0, _accessHeaders.setAccessHeaderMiddleware)({}, fakeResponse, function () {
			(0, _chai.expect)(fakeResponse.setHeader.calledWith('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token')).to.equal(true);
			done();
		});
	});
	it('should set Access-Control-Allow-Credentials', function (done) {
		(0, _accessHeaders.setAccessHeaderMiddleware)({}, fakeResponse, function () {
			(0, _chai.expect)(fakeResponse.setHeader.calledWith('Access-Control-Allow-Credentials', true)).to.equal(true);
			done();
		});
	});
});