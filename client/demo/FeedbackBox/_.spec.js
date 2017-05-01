import {expect, renderComponent} from '../../js/test_helper';
import CommentBox from './';

describe('Comment Box component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(CommentBox);
	});
	xit('Should allow for text input', () => {
		component.find('textarea').simulate('change', 'Test Comment');
		expect(component).to.have.value('Test Comment');
	});
});
