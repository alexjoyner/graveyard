import {expect, renderComponent} from '../../_startup/test_helper';
import sinion from 'sinon';
import {HomeUI} from './';

describe('demo-UI component', () => {
	let component, preOrderApp;
	beforeEach(() => {
		preOrderApp = sinion.stub().returns(1);
		component = renderComponent(HomeUI, {
			props: {}
		});
	});

	it('Should render a navbar', () => {
		expect(component.find('#NavBar')).to.exist;
	});
});
