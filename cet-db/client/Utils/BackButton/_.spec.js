import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {BackButton} from './';
import reducers from '../../_startup/combine_reducers';

describe('BackButton component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(BackButton, {
			props: {}
		}, {}, reducers);
	});

	it('Shoudl contain the back page name', () => {
		expect(component.find('.backPageName')).to.exist;
	});
});
