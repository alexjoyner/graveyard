import {renderComponent, expect} from 'ro-dev-utils';
import {CONTAINER_NAME} from './_config';
import {<%= containerName %>Reducer} from './reducer';
import * as types from './actions';

describe(<%= containerName %> + 'config reducer', () => {
	it('should return the initial state', () => {
		expect(<%= containerName %>Reducer(undefined, {})).to.deep.equal({
		});
	});
});
