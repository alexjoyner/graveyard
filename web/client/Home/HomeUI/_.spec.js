import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {HomeUI} from './';
import reducers from '../../_startup/combine_reducers';

describe('HomeUI component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(HomeUI, {
			props: {}
		}, {}, reducers);
	});

	it('Should render Hello HomeUI', () => {
		expect(component).to.contain('HELLO HomeUI');
	});
});
