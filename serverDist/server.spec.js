'use strict';

var _roDevUtils = require('ro-dev-utils');

var _server = require('./server');

_roDevUtils.request.agent(_server.app.listen());

describe('loading node express', function () {
	it('responds to /', function testSlash(done) {
		(0, _roDevUtils.request)(_server.app).get('/').expect(200).expect('Content-Type', 'text/html; charset=UTF-8').end(done);
	});
	it('should send everything else to /', function testPath(done) {
		(0, _roDevUtils.request)(_server.app).get('/foo/bar').expect(200).expect('Content-Type', 'text/html; charset=UTF-8').end(done);
	});
});