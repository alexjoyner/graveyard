import {request, expect} from 'ro-dev-utils';
import {app} from '../server';
import {router} from './';
app.use(router);

describe('Routes', () => {
	it('should get demos', (done) => {
		request(app.listen())
			.get('/demos')
			.expect(200)
			.expect('Here are the demos')
			.end(done);
	});
});
