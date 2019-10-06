describe('when links are clicked in header', () => {
    it('takes user to correct page', () => {
        cy.visit('/')
        cy.get('.siteHeader').as('header')

        cy.get('@header').contains('About Us').click()
        cy.url().should('contain', 'about-us')

        cy.get('@header').contains('Services').click()
        cy.url().should('contain', 'services')

        cy.get('@header').contains('Featured homes').click()
        cy.url().should('contain', 'homes')

        cy.get('@header').contains('Contact us').click()
        cy.url().should('contain', 'contact')
    })
})