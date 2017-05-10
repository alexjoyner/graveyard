import {renderComponent, expect} from 'ro-utils';
import {Demo} from './container';
import reducers from '../_startup/combine_reducers';
// Used describe to group together similar tests
describe('demo Container', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Demo, {params: {}}, {}, reducers);
	});
	it('should instantiate', () => {
		expect(component).to.exist;
	});
});
