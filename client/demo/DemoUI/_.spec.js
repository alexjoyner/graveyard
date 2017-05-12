import {renderComponent, expect} from 'ro-dev-utils';
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
});
