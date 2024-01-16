/// <reference types="cypress" />

describe('Login and Logout Tests', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html');
        cy.get('.icon-signin').click();
        
    });
    it('Should logout from the application', () => {
        cy.visit('http://zero.webappsecurity.com/index.htm', );
        cy.contains('li.dropdown:nth-child(3) > a:nth-child(1)').click();
        cy.get('#logout_link').click();
        cy.get('.brand').should('contain.text', 'Home');
    });

    // it('Should try to login with invalid data', () => {
    //     cy.loginWithInvalidData();
    // });

    // it('Should login to application with valid data', () => {
    //     cy.loginWithValidData();
    // });

    // it('Should logout from the application', () => {
    //     cy.logout();
    // });
});
