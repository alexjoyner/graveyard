describe('Accounts Feature', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});
	it('Has defaults', () => {
		cy.contains('My Personal Website');
	});
});
