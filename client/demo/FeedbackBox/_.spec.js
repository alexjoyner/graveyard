import {renderComponent, expect} from 'ro-utils';
import {FeedbackBox} from './';
import sinon from 'sinon';
import reducers from '../../_startup/combine_reducers';

describe('Feedback Box component', () => {
	let component, textArea, mock;
	beforeEach(() => {
		mock = sinon.spy();
		component = renderComponent(FeedbackBox, {
			addComment: mock
		}, {}, reducers);
	});
	it('should allow for text input', () => {
		textArea = component.find('textarea');
		textArea.simulate('change', 'test comment');
		expect(textArea).to.have.value('test comment');
	});
	it('should post new comment', () => {
		component.find('#addComment').simulate('click');
		expect(mock.called).to.be.equal(true);
	});
});
