import {expect} from '../../../../src/js/test_helper';
import {contains_or} from './index';

describe('contains_or boolean global util', () => {
	it('should contain the word or and be true', () => {
		expect(contains_or('this or this')).to.equal(true);
	});
	it('should not contain the word or and be false', () => {
		expect(contains_or('this this')).to.equal(false);
	});
});