import request from 'supertest';
describe('loading node express', () => {
	let server;
	beforeEach(() => {
		server = require('./server').server;
	});
	afterEach(() => {
		server.close();
	});

	it('responds to /', function testSlash(done) {
		request(server)
			.get('/')
			.expect(200)
			.expect('Content-Type', 'text/html; charset=UTF-8')
			.end(done);
	});
	it('should send everything else to /', function testPath(done) {
		request(server)
			.get('/foo/bar')
			.expect(200)
			.expect('Content-Type', 'text/html; charset=UTF-8')
			.end(done);
	});
});
