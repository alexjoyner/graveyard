import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {NavBar} from './';
import reducers from '../../../_startup/combine_reducers';

describe('NavBar component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(NavBar, {
			props: {}
		}, {}, reducers);
	});
	it('Should render NavBar', () => {
		expect(component.find('.NavBar')).to.exist;
	});
	it('Should render Check In', () => {
		expect(component).to.contain('Check In');
	});
	it('Should render Check Out', () => {
		expect(component).to.contain('Check Out');
	});
});
