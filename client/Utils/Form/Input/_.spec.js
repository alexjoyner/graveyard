import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {Input} from './';
import reducers from '../../../_startup/combine_reducers';

describe('Input component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Input, {
			props: {}
		}, {}, reducers);
	});

	it('Should render an Input', () => {
		expect(component.find('input')).to.exist
	});
});
