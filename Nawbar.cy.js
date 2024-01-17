/// <reference types="cypress" />

describe('Navbar test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('Should display online banking content', () => {
        cy.contains('Online Banking').click();
        cy.url().should('include', 'online-banking.html');
        cy.get('h1').should('be.visible');
      });
    
      it('Should display feedback content', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Feedback').click();
        cy.url().should('include', 'feedback.html');
      });
    
      it('Should display homepage content', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Zero Bank').click();
        cy.url().should('include', 'index.html');
      });
      it('Should display account activity content', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.contains('Online Banking').click();
        cy.get('#account_activity_link').click();
        cy.get('#user_login').type('username');
        cy.get('#user_password').type('password');
        cy.get('.btn').click();
        cy.get('#account_activity_tab > a:nth-child(1)').should('be.visible')
        cy.get('li.ui-state-default:nth-child(1) > a:nth-child(1)').should('exist')
        cy.url().should('include', 'bank/account-activity.html');

      });
});