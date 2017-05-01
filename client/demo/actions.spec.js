import {expect} from '../js/test_helper';
import {preOrderApp, POST_PREORDER} from './actions';

// Used describe to group together similar tests
describe('actions', () => {
	it('creates POST_PREORDER when someone preorders the app', () => {
		expect(preOrderApp(0)).to.deep.equal({
			type: POST_PREORDER,
			payload: {
				data: {
					preOrdersNow: 1
				}
			}
		})
	});
});
