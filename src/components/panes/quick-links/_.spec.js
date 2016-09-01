import {renderComponent, expect} from '../../../js/test_helper';
import QuickLinks from './index'

// Used describe to group together similar tests
describe('Quick Links', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(QuickLinks);
	});

	it('Should contain class QuickLinksPane', () => {
		return expect(component.find('.QuickLinksPane')).to.exist;
	});
	it('Should contain the text Quick Links', () => {
		return expect(component).to.contain('Quick Links');
	});
});
