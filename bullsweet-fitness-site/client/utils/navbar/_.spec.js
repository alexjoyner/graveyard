import {expect, renderComponent} from '../../_startup/test_helper';
import sinion from 'sinon';
import {NavBar} from './';

describe('navbar component', () => {
	let component, preOrderApp;
	beforeEach(() => {
		preOrderApp = sinion.stub().returns(1);
		component = renderComponent(NavBar, {
			props: {}
		});
	});

	it('should contain home tab', () => {
		expect(component).to.contain('HOME');
	});
	it('should contain about tab', () => {
		expect(component).to.contain('ABOUT');
	});
	it('should contain programs tab', () => {
		expect(component).to.contain('WORKOUT PROGRAMS');
	});
	it('should contain apparel tab', () => {
		expect(component).to.contain('APPAREL');
	});
	it('should contain FAQ tab', () => {
		expect(component).to.contain('FAQ');
	});
	it('should contain social tab', () => {
		expect(component).to.contain('SOCIAL');
	});
	it('should contain contact tab', () => {
		expect(component).to.contain('CONTACT');
	});
});
