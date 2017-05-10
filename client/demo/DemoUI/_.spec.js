import {renderComponent, expect} from 'ro-utils';
import sinion from 'sinon';
import {DemoUI} from './';
import reducers from '../../_startup/combine_reducers';

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
		}, {}, reducers);
	});

	it('Should render Hello World', () => {
		expect(component).to.contain('HELLO WORLD');
	});
	it('Should pre-order when pre-order button is clicked', () => {
		component.find('#preOrderButton').simulate('click');
		expect(preOrderApp.calledOnce).to.equal(true);
	})
});
