import {renderComponent, expect} from '../../js/test_helper';
import App from './app';

// Used describe to group together similar tests
describe('App', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(App);
	});

	it('should contain the id MainMetaTruthContainer', () => {
		return expect(component.find('#MainMetaTruthContainer')).to.exist;
	});
	it('should contain a NavBar', () => {
		return expect(component.find('#MainNavBar')).to.exist;
	});
});
