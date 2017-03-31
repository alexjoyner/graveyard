import {expect} from '../../../../src/js/test_helper';
import {contains_you} from './index';

describe('contains_you boolean global util', () => {
	it('should contain the word or and be true', () => {
		expect(contains_you('Should you this')).to.equal(true);
	});
	it('should not contain the word or and be false', () => {
		expect(contains_you('this this')).to.equal(false);
	});
});