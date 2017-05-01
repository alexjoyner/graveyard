import {renderComponent, expect} from '../_startup/test_helper';
import {Demo} from './container';

// Used describe to group together similar tests
describe('demo Container', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Demo, {params: {}}, {});
	});
	it('should instantiate', () => {
		expect(component).to.exist;
	});
});
