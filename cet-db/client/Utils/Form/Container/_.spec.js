import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {Container} from './';
import reducers from '../../../_startup/combine_reducers';

describe('Container component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Container, {
			props: {}
		}, {}, reducers);
	});

	it('Should render Hello Container', () => {
		expect(component).to.contain('HELLO Container');
	});
});
