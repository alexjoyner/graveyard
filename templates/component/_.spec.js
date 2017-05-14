import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {<%= componentName %>} from './';
import reducers from '../../_startup/combine_reducers';

describe('<%= componentName %> component', () => {
	let component;
	beforeEach(() => {
		renderComponent(<%= componentName %>, {
			props: {}
		}, {}, reducers);
	});

	it('Should render Hello World', () => {
		expect(component).to.contain('HELLO <%= componentName %>');
	});
});
