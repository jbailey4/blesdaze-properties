describe('when user visits homes listing page', () => {
    it('displays list of homes', () => {
        cy.visit('/homes')

        cy.contains('Listing Type')
        cy.get('.houses')
    })
})