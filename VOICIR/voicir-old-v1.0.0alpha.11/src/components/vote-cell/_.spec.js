import {renderComponent, expect} from '../../js/test_helper';
import VoteCell from './';

// Used describe to group together similar tests
describe('Vote Cell', () => {
	let component;
	let MOCK_POST_DATA = {
		ups: 30,
		dwns: 4,
		post_type_id: null
	};
	beforeEach(() => {
		component = renderComponent(VoteCell, {
			post: MOCK_POST_DATA
		});
	});

	it('should contain an upvote button', () => {
		return expect(component.find('.upvote-btn')).to.exist;
	});
	it('should contain an downvote button', () => {
		return expect(component.find('.downvote-btn')).to.exist;
	});
});
