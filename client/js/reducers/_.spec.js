import {expect} from '../test_helper';
import {configReducer} from './reducer_config';
import * as types from '../actions';
describe('config reducer', () => {

	it('should return the initial state', () => {
		expect(configReducer(undefined, {})).to.deep.equal({
			appName: 'your-app-name',
			version: 'v0.0.1',
			preOrders: 1
		});
	});

	it('should post new preorder', () => {
		expect(configReducer(undefined, {
			type: types.POST_PREORDER,
			payload: {
				data: {
					preOrdersNow: 'success test POST_PREORDER'
				}
			}
		})).to.deep.equal({
			appName: 'your-app-name',
			version: 'v0.0.1',
			preOrders: 'success test POST_PREORDER'
		});
	});
});
