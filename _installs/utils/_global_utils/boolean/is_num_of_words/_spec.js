import {expect} from '../../../../src/js/test_helper';
import {is_num_of_words} from './index';

describe('is_num_of_words boolean global util', () => {
	it('should be three words', ()=>{
		expect(is_num_of_words('this is cool', 3)).to.equal(true)
	});
	it('should not be three words', ()=>{
		expect(is_num_of_words('this is', 3)).to.equal(false)
	})
});