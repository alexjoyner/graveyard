import {renderComponent, expect} from 'ro-dev-utils';
import reducers from '../../_startup/combine_reducers';
import {createStore} from 'redux';
import sinon from 'sinon';
import {CheckInForm} from './';

describe('Checkin form component', () => {
	let component, proxy;
	beforeEach(() => {
		proxy = sinon.stub().returns(1);
		component = renderComponent(CheckInForm, {
			postNewClient: proxy
		}, {}, reducers);
	});
	it('should render the component', () => {
		expect(component).to.exist;
	});
});
