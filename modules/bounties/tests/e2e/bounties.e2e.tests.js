'use strict';

describe('Bounties E2E Tests:', function() {
	describe('Test Bounties page', function() {
		it('Should not include new Bounties', function() {
			browser.get('http://localhost:3000/#!/bounties');
			expect(element.all(by.repeater('bounty in bounties')).count()).toEqual(0);
		});
	});
});
