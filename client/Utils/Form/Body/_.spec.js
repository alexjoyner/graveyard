import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {Body} from './';
import reducers from '../../../_startup/combine_reducers';

describe('Body component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Body, {
			props: {}
		}, {}, reducers);
	});

	it('Should render Hello Body', () => {
		expect(component).to.contain('HELLO Body');
	});
});
