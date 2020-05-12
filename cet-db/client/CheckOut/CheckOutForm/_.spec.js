import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {CheckOutForm} from './';
import reducers from '../../_startup/combine_reducers';

describe('CheckOutForm component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(CheckOutForm, {
			props: {}
		}, {}, reducers);
	});

	it('Should render CheckOutForm', () => {
		expect(component).to.exist;
	});
});
