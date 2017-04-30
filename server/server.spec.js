import request from 'supertest';

describe('loading node express', () => {
	let server;
	beforeEach(function () {
		server = require('./server').server;
	});
	afterEach(function () {
		server.close();
	});
	it('responds to /', function testSlash(done) {
		request(server)
			.get('/')
			.expect(200)
			.end(done);
	});
	it('should send everything else to /', function testPath(done) {
		request(server)
			.get('/foo/bar')
			.expect(200)
			.end(done);
	});
});
