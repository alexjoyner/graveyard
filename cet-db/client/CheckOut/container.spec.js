import {renderComponent, expect} from 'ro-dev-utils';
import {CheckOut} from './container';
import reducers from '../_startup/combine_reducers';
// Used describe to group together similar tests
describe('CheckOut Container', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(CheckOut, {params: {}}, {}, reducers);
	});
	it('should instantiate', () => {
		expect(component).to.exist;
	});
});
