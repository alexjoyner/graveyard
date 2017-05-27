import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {Details} from './';
import reducers from '../../../_startup/combine_reducers';

describe('Details component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Details, {
			props: {}
		}, {}, reducers);
	});

	it('Should render Hello Details', () => {
		expect(component).to.contain('HELLO Details');
	});
});
