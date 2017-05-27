import { request } from 'ro-dev-utils';
import {app} from './server';
let port = 2201;
request.agent(app.listen(port, function () {
	console.log('Test app running on port ' + port);
}));

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
