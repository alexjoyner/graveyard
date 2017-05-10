import {renderComponent, expect} from 'ro-utils';
import {CommentList} from './';
import reducers from '../../_startup/combine_reducers';

describe('Comment List', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(CommentList, {
			comments: ['TEST COMMENT']
		}, {}, reducers);
	});

	it('should display a comment', () => {
		expect(component).to.contain('TEST COMMENT');
	})
});
