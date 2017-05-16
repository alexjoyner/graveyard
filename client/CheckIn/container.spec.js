import {renderComponent, expect} from 'ro-dev-utils';
import {CheckIn} from './container';
import reducers from '../_startup/combine_reducers';
// Used describe to group together similar tests
describe('CheckIn Container', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(CheckIn, {params: {}}, {}, reducers);
	});
	it('should instantiate', () => {
		expect(component).to.exist;
	});
});
