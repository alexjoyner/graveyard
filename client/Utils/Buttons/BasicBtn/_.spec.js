import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {BasicBtn} from './';
import reducers from '../../../_startup/combine_reducers';

describe('BasicBtn component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(BasicBtn, {
			props: {}
		}, {}, reducers);
	});

	it('Should render a button', () => {
		expect(component.find('.BasicBtn')).to.exist;
	});
});
