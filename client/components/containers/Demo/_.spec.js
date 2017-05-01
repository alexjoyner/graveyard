import {renderComponent, expect} from '../../../js/test_helper';
import {Demo} from './';

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
