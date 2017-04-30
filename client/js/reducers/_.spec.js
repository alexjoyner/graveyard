import {expect} from '../test_helper';
import {configReducer} from './reducer_config';

describe('config reducer', () => {
	it('should return the initial state', () => {
		expect(configReducer(undefined, {})).to.deep.equal({
			appName: 'your-app-name',
			version: 'v0.0.1',
			preOrders: 1
		});
	});
});
