import {renderComponent, expect} from '../../js/test_helper';
import NavBar from './';
import Config from '../../js/reducers/reducer_config';
// Used describe to group together similar tests
describe('NavBar', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(NavBar);
	});


	it('Should create a NavBar', () => {
		return expect(component).to.exist;
	});
	it('Should contain the Brand name', () => {
		const config_info = Config(undefined, {});
		const brand = config_info.appName + ' ' + config_info.version;
		expect(component).to.contain(brand);
	});
});
