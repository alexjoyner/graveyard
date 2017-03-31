import {renderComponent, expect} from '../../../js/test_helper';
import Home from './';

// Used describe to group together similar tests
describe('Home', () => {
	let component;
	describe('Hot Feed Nothing Passed or Route \'/\'', () => {
		beforeEach(() => {
			component = renderComponent(Home, {params: {}});
		});
		it('Should contain a the header Hot questions on MetaTruth right now', () => {
			return expect(component).to.contain('Hot questions on MetaTruth right now');
		});

		xit('Should contain a quick links pane', () => {
			return expect(component.find('.QuickLinksPane')).to.exist;
		});

		it('Should contain a post', () => {
			return expect(component.find('.mt-post')).to.exist;
		});
	});

});
