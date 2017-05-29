import {renderComponent, expect, sinon} from 'ro-dev-utils';
import {SearchResults} from './';
import reducers from '../../_startup/combine_reducers';

describe('SearchResults component', () => {
	let component;
	beforeEach(() => {
		component = renderComponent(SearchResults, {
			props: {}
		}, {}, reducers);
	});

	it('Should render the text Search Results', () => {
		expect(component).to.contain('Search Results');
	});
});
