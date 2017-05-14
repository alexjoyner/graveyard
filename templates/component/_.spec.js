import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {<%= componentName %>} from './';
import reducers from '../../_startup/combine_reducers';

describe('<%= componentName %> component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(<%= componentName %>, {
			props: {}
		}, {}, reducers);
	});

	it('Should render Hello <%= componentName %>', () => {
		expect(component).to.contain('HELLO <%= componentName %>');
	});
});
