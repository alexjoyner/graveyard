'use strict';

var _roDevUtils = require('ro-dev-utils');

var _server = require('../server');

var _ = require('./');

_server.app.use(_.router);

describe('Routes', function () {
	xit('should get demos', function (done) {
		(0, _roDevUtils.request)(_server.app.listen()).get('/demos').expect(200).expect('Here are the demos').end(done);
	});
});