describe('Accounts Feature', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});
	it('Has Title', () => {
		cy.contains('Entry Level Software Jobs');
	});
});
