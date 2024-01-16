/// <reference types="cypress" />

describe('first', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html')
    });



    it('Should show search result page', () => {
        cy.get('#searchTerm').type('online {enter}');
        cy.get('h2').should('contain.text', 'Search Results:');
        cy.get(':nth-child(4) > :nth-child(1) > a').should('contain.text', 'Zero - Free Access to Online Banking')
        cy.get(':nth-child(2) > a').should('contain.text', 'Zero - Online Statements')
    });
});
