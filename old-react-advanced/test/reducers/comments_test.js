import { expect } from '../test_helper';
import commentsReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';

describe('Comments Reducer', () => {
	it('handles action with unknown type', () => {
		const result = commentsReducer(undefined, {});
		expect(result).to.eql([]);
	});

	it('handles action of type SAVE_COMMENT', () => {
		const action = {
			type: SAVE_COMMENT,
			payload: 'test comment'
		};
		const result = commentsReducer([], action);
		expect(result).to.eql(['test comment']);
	});
});