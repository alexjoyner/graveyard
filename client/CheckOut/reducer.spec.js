import {renderComponent, expect} from 'ro-dev-utils';
import {Reducer} from './reducer';
import * as types from './actions';

describe(' config reducer', () => {
	it('should return the initial state', () => {
		expect(Reducer(undefined, {})).to.deep.equal({
			showNotif: false
		});
	});
});
