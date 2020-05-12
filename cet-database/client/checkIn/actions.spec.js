import {expect} from '../_startup/test_helper';
import {postNewClient, POST_NEW_CLIENT} from './actions';

// Used describe to group together similar tests
describe('actions', () => {
	xit('correctly posts pre-order', () => {
		expect(postNewClient()).to.deep.equal({
			type: POST_NEW_CLIENT
		})
	});
});
