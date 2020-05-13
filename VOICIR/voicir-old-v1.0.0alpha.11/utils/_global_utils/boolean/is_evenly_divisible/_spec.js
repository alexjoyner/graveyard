import {expect} from '../../../../src/js/test_helper';
import {is_evenly_divisible} from './index';

describe('is_evenly_divisible boolean global util', () => {
	it('should be evenly divisible', () => {
		expect(is_evenly_divisible(12, 3)).to.equal(true);
	});
	it('should not be evenly divisible', () => {
		expect(is_evenly_divisible(1, 25)).to.equal(false);
	});
	it('should be false if anything is 0', () => {
		expect(is_evenly_divisible(1, 0)).to.equal(false);
		expect(is_evenly_divisible(0, 1)).to.equal(false);
	});
});