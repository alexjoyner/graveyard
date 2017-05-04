import {expect, renderComponent} from '../../_startup/test_helper';
import sinion from 'sinon';
import {DemoUI} from './';

describe('demo-UI component', () => {
	let component, preOrderApp;
	beforeEach(() => {
		preOrderApp = sinion.stub().returns(1);
		component = renderComponent(DemoUI, {
			props: {
				comments: ['test comment'],
				appName: 'TEST',
				preOrders: 1,
				preOrderApp: preOrderApp
			}
		});
	});

	it('Should render Hello World', () => {
		expect(component).to.contain('HELLO WORLD');
	});
	it('Should pre-order when pre-order button is clicked', () => {
		component.find('#preOrderButton').simulate('click');
		expect(preOrderApp.calledOnce).to.equal(true);
	})
});
