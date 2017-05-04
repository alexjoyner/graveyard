import {renderComponent, expect} from '../../_startup/test_helper';
import {CommentList} from './';

describe('Comment List', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(CommentList, {
			comments: ['TEST COMMENT']
		});
	});

	it('should display a comment', () => {
		expect(component).to.contain('TEST COMMENT');
	})
});
