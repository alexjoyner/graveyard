import {expect} from 'chai';
import index from './index';

describe('Index', () => {
	it('Should add two numbers', () => {
		expect(index.addTwoNumbers(2, 5)).to.equal(7);
	});
});
