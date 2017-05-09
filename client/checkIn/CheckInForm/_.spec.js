import {renderComponent, expect} from '../../_startup/test_helper';
import sinon from 'sinon';
import {CheckInForm} from './';

describe('Checkin form component', () => {
	let component, proxy;
	beforeEach(() => {
		proxy = sinon.stub().returns(1);
		component = renderComponent(CheckInForm, ({
			postNewClient: proxy
		}));
	});
	it('should render the component', () => {
		expect(component).to.exist;
	});
});
