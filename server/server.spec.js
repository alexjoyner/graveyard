import { request } from 'ro-dev-utils';
import {app} from './server';
request.agent(app.listen());

describe('loading node express', () => {
	it('responds to /', function testSlash(done) {
		request(app)
			.get('/')
			.expect(200)
			.expect('Content-Type', 'text/html; charset=UTF-8')
			.end(done);
	});
	it('should send everything else to /', function testPath(done) {
		request(app)
			.get('/foo/bar')
			.expect(200)
			.expect('Content-Type', 'text/html; charset=UTF-8')
			.end(done);
	});
});
