import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {CheckInUI} from './';
import reducers from '../../_startup/combine_reducers';

describe('CheckInUI component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(CheckInUI, {
			props: {}
		}, {}, reducers);
	});

	it('Should render Hello CheckInUI', () => {
		expect(component).to.contain('HELLO CheckInUI');
	});
});
