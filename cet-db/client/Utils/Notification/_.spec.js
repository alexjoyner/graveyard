import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {Notification} from './';
import reducers from '../../_startup/combine_reducers';

describe('Notification component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Notification, {
			props: {}
		}, {}, reducers);
	});

	it('Should contain a status icon', () => {
		expect(component.find('.statusIcon')).to.exist;
	});
	it('Should contain a status header', () => {
		expect(component.find('.statusHeader')).to.exist;
	});
	it('Should contain a notification message', () => {
		expect(component.find('.message')).to.exist;
	});
});
