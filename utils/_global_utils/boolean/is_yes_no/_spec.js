import {expect} from '../../../../src/js/test_helper';
import {is_yes_no} from './index';

describe('is_yes_no boolean global util', () => {
	it('should be three words', ()=>{
		expect(is_yes_no('is this cool')).to.equal(true)
	});
	it('should not be three words', ()=>{
		expect(is_yes_no('this is')).to.equal(false)
	})
});