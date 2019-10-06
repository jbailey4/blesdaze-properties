/// <reference types="cypress" />

describe('when visiting the homepage', () => {
    it('presents correct content', () => {
        cy.visit('/')

        cy.contains('Blesdaze Properties')
        cy.contains('Our mission statement principals are: Hope, Help & Home')

        cy.get('.featured-owner').contains('Curtis Watson')

        cy.get('.carousel-container')
        cy.get('.carousel-container .right').click()
        cy.get('.carousel-container .left').click()

        cy.get('[data-test="rental-kharma"]').as('rentalKharmaSection')
        
        cy.get('@rentalKharmaSection').contains('888-512-4446')
        cy.get('@rentalKharmaSection').contains('www.myfes.net')

        cy.get('[data-test="facebookLink"]')
            .should('have.attr', 'href')
            .and('equal', 'https://www.facebook.com/blesdazeproperties')
        
        cy.get('[data-test="linkedInLink"]')
            .should('have.attr', 'href')
            .and('equal', 'https://www.linkedin.com/in/curtis-watson-1aa34242')
        
        cy.get('[data-test="address"]').as('footerAddress')
        cy.get('@footerAddress').contains('PO Box 38073')
        cy.get('@footerAddress').contains('Charlotte NC 28278-8073')
        cy.get('@footerAddress').contains('704-526-5278')
    })
})