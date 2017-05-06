import {renderComponent, expect} from '../_startup/test_helper';
import {Home} from './container';

// Used describe to group together similar tests
describe('demo Container', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Home, {params: {}}, {});
	});
	it('should instantiate', () => {
		expect(component).to.exist;
	});
});
