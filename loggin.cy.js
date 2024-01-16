/// <reference types="cypress" />

describe('Login and Logout Tests', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html');
        cy.get('.icon-signin').click();
    });

    it('Should try to login with invalid data', () => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html');
        cy.get('.icon-signin').click();
        cy.get('#login_form').should('be.visible');
        cy.get('#user_login').type('invalid username');
        cy.get('#user_password').type('invalid password');
        cy.get('#user_remember_me').click();
        cy.get('input[name="submit"]').click();
        cy.get('.alert.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.');
    });

    it('Should login and logout to application with valid data', () => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html');
        cy.get('.icon-signin').click();
        cy.fixture('user').then((user) => {

            cy.get('#user_login').clear().type(user.username);
            cy.get('#user_password').clear().type(user.password);
            cy.get('input[name="submit"]').click();
            cy.get('h2').should('contain.text', 'Cash Accounts');
             cy.visit('http://zero.webappsecurity.com/bank/account-summary.html');
        cy.contains('li.dropdown:nth-child(3) > a:nth-child(1)').click();
        cy.get('#logout_link').click();
        cy.get('.brand').should('contain.text', 'Home');
        });
    });

    it('Should logout from the application', () => {
        cy.visit('http://zero.webappsecurity.com/bank/account-summary.html');
        cy.contains('li.dropdown:nth-child(3) > a:nth-child(1)').click();
        cy.get('#logout_link').click();
        cy.get('.brand').should('contain.text', 'Home');
    });
});
