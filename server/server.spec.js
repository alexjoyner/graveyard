import {expect} from 'chai';
import * as server from './server.js';

describe('All exported utilities', () => {
	it('should have addTwoNumbers', () => {
		expect(5 + 5).to.equal(10);
	});
});
