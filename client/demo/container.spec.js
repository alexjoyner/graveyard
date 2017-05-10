import {renderComponent, expect} from 'ro-utils';
import {CONTAINER_NAME} from './_config';
import {Demo} from './container';
import reducers from '../_startup/combine_reducers';
// Used describe to group together similar tests
describe(CONTAINER_NAME + ' Container', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Demo, {params: {}}, {}, reducers);
	});
	it('should instantiate', () => {
		expect(component).to.exist;
	});
});
