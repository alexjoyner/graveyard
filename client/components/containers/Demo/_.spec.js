import {renderComponent, expect} from '../../../js/test_helper';
import {Demo} from './';

// Used describe to group together similar tests
describe('Demo', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Demo, {params: {}}, {});
	});
	it('Should instantiate', () => {
		expect(component).to.exist;
	});
});
