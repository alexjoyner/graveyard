import {expect, renderComponent} from '../../_startup/test_helper';
import sinon from 'sinon';
import {CheckInUI} from './';

describe('CheckInUI component', () => {
	let component, proxy;
	beforeEach(() => {
		proxy = sinon.stub().returns(1);
		component = renderComponent(CheckInUI, {
			props: {
				postNewClient: proxy
			}
		});
	});
});
