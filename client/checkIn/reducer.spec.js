import {expect} from '../_startup/test_helper';
import {demoReducer} from './reducer';
import * as types from './actions';
describe('config reducer', () => {

	it('should return the initial state', () => {
		expect(demoReducer(undefined, {})).to.deep.equal({});
	});

	xit('should post new preorder', () => {
		expect(demoReducer(undefined, {
			type: types.POST_NEW_CLIENT
		})).to.deep.equal({});
	});
});
