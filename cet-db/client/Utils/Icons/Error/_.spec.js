import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {Error} from './';
import reducers from '../../../_startup/combine_reducers';

describe('Error component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(Error, {
			props: {}
		}, {}, reducers);
	});

	it('Should render', () => {
		expect(component).to.exist;
	});
});
