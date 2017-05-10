import {renderComponent, expect} from 'ro-utils';
import {CONTAINER_NAME} from './_config';
import {demoReducer} from './reducer';
import * as types from './actions';

describe(CONTAINER_NAME + 'config reducer', () => {
	it('should return the initial state', () => {
		expect(demoReducer(undefined, {})).to.deep.equal({
		});
	});
});
