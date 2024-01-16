/// <reference types="cypress" />

describe('first', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html');
        cy.url().should('include', 'index.html');
        cy.get('.icon-signin').click();
    });

// Test case: Should try to login with invalid data
it('Should try to login with invalid data', () => {
    cy.get('#login_form').should('be.visible');
    cy.get('#user_login').type('invalid username');
    cy.get('#user_password').type('invalid password');
    cy.get('input[name="submit"]').click();
    // cy.get('.alert').should('be.visible').and('contain.text', 'Login and/or password are wrong.');
  });
  it('Should display error message', () => {
    cy.get('.alert').should('be.visible').and('contain.text', 'Login and/or password are wrong.');
  });
  it('Should login to application with valid data', () => {
    cy.fixture('user').then((user) => {
    
      cy.get('#user_login').clear().type(user.username);
      cy.get('#user_password').clear().type(user.password);
      cy.get('input[name="submit"]').click();
      cy.get('h2').should('contain.text', 'Cash Accounts');
    });
  });
  it('Should logout from the application', () => {
    cy.contains('username').click();
    cy.get('#logout_link').click();
    cy.get('strong').should('contain.text', 'Home');
  });
  



});
