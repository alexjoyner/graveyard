import request from 'supertest';
import {app} from '../server';
import expect from 'chai';
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
