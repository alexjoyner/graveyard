import {expect} from '../_startup/test_helper';
import {preOrderApp, addComment, POST_PREORDER, POST_COMMENT} from './actions';

// Used describe to group together similar tests
describe('actions', () => {
	it('correctly posts pre-order', () => {
		expect(preOrderApp()).to.deep.equal({
			type: POST_PREORDER
		})
	});
	it('correctly posts comment', () => {
		expect(addComment('test comment')).to.deep.equal({
			type: POST_COMMENT,
			data: 'test comment'
		})
	});
});
