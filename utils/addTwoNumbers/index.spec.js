import {expect} from 'chai';
import {addTwoNumbers} from './';

describe('addTwoNumbers', () => {
	it('Should add two numbers', () => {
		expect(addTwoNumbers(2, 5)).to.equal(7);
	});
});
