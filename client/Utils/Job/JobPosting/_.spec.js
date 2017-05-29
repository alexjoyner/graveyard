import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {JobPosting} from './';
import reducers from '../../_startup/combine_reducers';

describe('JobPosting component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(JobPosting, {
			props: {}
		}, {}, reducers);
	});

	it('Should render Hello JobPosting', () => {
		expect(component).to.contain('HELLO JobPosting');
	});
});
