it('Three paragraphs are present', () => {
	cy.visit('./index.html')

	cy
		.get('[data-cy="first"]')
		.should('be.visible')
		.contains('first', { matchCase: false })

	cy
		.get('[data-cy="second"]')
		.should('be.visible')
		.contains('second', { matchCase: false })

	cy
		.get('[data-cy="third"]')
		.should('be.visible')
		.contains('third', { matchCase: false })
})
