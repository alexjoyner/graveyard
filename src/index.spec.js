import {expect} from 'chai';
import * as index from './index';

describe('All exported utilities', () => {
	it('should have addTwoNumbers', () => {
		expect(index.addTwoNumbers).to.be.instanceOf(Function);
	});
});
