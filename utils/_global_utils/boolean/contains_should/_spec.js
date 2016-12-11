import {expect} from '../../../../src/js/test_helper';
import {contains_should} from './index';

describe('contains_should boolean global util', () => {
	it('should contain the word or and be true', () => {
		expect(contains_should('Should this')).to.equal(true);
	});
	it('should not contain the word or and be false', () => {
		expect(contains_should('this this')).to.equal(false);
	});
});