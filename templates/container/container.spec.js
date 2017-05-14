import {renderComponent, expect} from 'ro-dev-utils';
import {<%= upperContainerName %>} from './container';
import reducers from '../_startup/combine_reducers';
// Used describe to group together similar tests
describe('<%= upperContainerName %> Container', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(<%= upperContainerName %>, {params: {}}, {}, reducers);
	});
	it('should instantiate', () => {
		expect(component).to.exist;
	});
});
