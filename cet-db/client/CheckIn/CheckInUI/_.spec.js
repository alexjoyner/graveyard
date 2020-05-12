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

	it('Should render NavBar', () => {
		expect(component.find('.NavBar')).to.exist;
	});
	it('Should render footer', () => {
		expect(component.find('.Footer')).to.exist;
	});
	it('Should render the Check In Form', () => {
		expect(component.find('.FormBody')).to.exist;
	})
});
