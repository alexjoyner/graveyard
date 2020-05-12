import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {Footer} from './';
import reducers from '../../../_startup/combine_reducers';

describe('Footer component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Footer, {
			props: {}
		}, {}, reducers);
	});

	it('Should render Footer', () => {
		expect(component.find('.Footer')).to.exist;
	});
});
