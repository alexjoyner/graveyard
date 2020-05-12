import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {Success} from './';
import reducers from '../../../_startup/combine_reducers';

describe('Success component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Success, {
			props: {}
		}, {}, reducers);
	});
});
