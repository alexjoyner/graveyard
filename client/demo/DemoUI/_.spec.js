import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {DemoUI} from './';
import reducers from '../../_startup/combine_reducers';

describe('demo-UI component', () => {
	let component, preOrderApp;
	beforeEach(() => {
		preOrderApp = sinon.stub().returns(1);
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
