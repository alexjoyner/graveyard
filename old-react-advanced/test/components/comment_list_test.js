import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';


// Used describe to group together similar tests
describe('CommentList', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(CommentList, null, {
			comments : ['New Comment', 'Other comment']
		});
	});

	it('shows an LI for each comment', () => {
		expect(component.find('li').length).to.equal(2);
	});

	it('shows each comment that is provided', () => {
		expect(component).to.contain('New Comment');
		expect(component).to.contain('Other comment');
	});
});
