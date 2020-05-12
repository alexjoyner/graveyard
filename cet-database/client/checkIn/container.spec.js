import {renderComponent, expect} from '../_startup/test_helper';
import {CheckIn} from './container';

// Used describe to group together similar tests
describe('checkIn Container', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(CheckIn, {params: {}}, {});
	});
	it('should instantiate', () => {
		expect(component).to.exist;
	});
});
