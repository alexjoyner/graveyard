import {renderComponent, expect} from 'ro-dev-utils';
import {Home} from './container';
import reducers from '../_startup/combine_reducers';
// Used describe to group together similar tests
describe('Home Container', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Home, {params: {}}, {}, reducers);
	});
	it('should instantiate', () => {
		expect(component).to.exist;
	});
});
