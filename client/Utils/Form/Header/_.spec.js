import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {Header} from './';
import reducers from '../../../_startup/combine_reducers';

describe('Header component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Header, {
			HeaderText: 'Test'
		}, {}, reducers);
	});

	it('Should render a Headaer', () => {
		expect(component.find('.Header')).to.exist;
	});
	it('Should contain header text', () => {
		expect(component).to.contain('Test');
	});
});
