import {renderComponent, expect} from 'ro-utils';
import {demoReducer} from './reducer';
import * as types from './actions';
describe('config reducer', () => {

	it('should return the initial state', () => {
		expect(demoReducer(undefined, {})).to.deep.equal({
			appName: 'your-app-name',
			comments: ['Test comment'],
			preOrders: 1
		});
	});

	it('should post new preorder', () => {
		expect(demoReducer(undefined, {
			type: types.POST_PREORDER
		})).to.deep.equal({
			appName: 'your-app-name',
			comments: ['Test comment'],
			preOrders: 2
		});
	});
	it('should post new comment', () => {
		expect(demoReducer(undefined, {
			type: types.POST_COMMENT,
			data: 'new test'
		})).to.deep.equal({
			appName: 'your-app-name',
			comments: ['Test comment', 'new test'],
			preOrders: 1
		});
	});
});
