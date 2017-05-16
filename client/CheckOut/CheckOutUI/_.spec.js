import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {CheckOutUI} from './';
import reducers from '../../_startup/combine_reducers';

describe('CheckOutUI component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(CheckOutUI, {
			props: {}
		}, {}, reducers);
	});

	it('Should render Hello CheckOutUI', () => {
		expect(component).to.contain('HELLO CheckOutUI');
	});
});
