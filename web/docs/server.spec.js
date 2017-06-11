'use strict';

var _roDevUtils = require('ro-dev-utils');

var _server = require('./server');

_roDevUtils.request.agent(_server.server);

describe('loading node express', function () {
	afterEach(function (done) {
		_server.server.close();
		done();
	});
	it('responds to /', function (done) {
		(0, _roDevUtils.request)(_server.app).get('/').expect(200).expect('Content-Type', 'text/html; charset=UTF-8').end(done);
	});
	it('should send everything else to /', function testPath(done) {
		(0, _roDevUtils.request)(_server.app).get('/foo/bar').expect(200).expect('Content-Type', 'text/html; charset=UTF-8').end(done);
	});
});
// Don't call the stopHandler when exiting the test.
after(function () {
	process.removeAllListeners('SIGINT');
	process.removeAllListeners('SIGTERM');
});

describe('Signal handling', function () {
	['SIGTERM' /*, 'SIGINT' */].forEach(function (SIGNAL) {

		describe('' + SIGNAL, function () {
			var exitStub = void 0,
			    sandbox = void 0;

			beforeEach(function () {
				sandbox = _roDevUtils.sinon.sandbox.create({});
				exitStub = sandbox.stub(process, 'exit');
			});

			afterEach(function () {
				sandbox.restore();
			});

			it('should call \'process.exit()\' after receiving ' + SIGNAL, function (done) {
				process.once(SIGNAL, function () {
					// At this point, the timeout handler should have triggered, and
					// `process.exit()` should have been called.
					_roDevUtils.sinon.assert.calledOnce(exitStub);

					// Done.
					done();
				});
				process.kill(process.pid, SIGNAL);
			});
		});
	});
});