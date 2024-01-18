/// <reference types="cypress" />


describe('Test Swaglabs', () => {
    it('Visit the website', () => {
        cy.visit('https://www.saucedemo.com/')
    });
    it('Test Login with valid data', () => {
        cy.visitWebsite()
        cy.get('#user-name').clear()
        cy.get('#user-name').type('standard_user')
        cy.get('#password').clear()
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click();    
    });
    it('Test login without valid data', () => {
        cy.visitWebsite()
        cy.get('#user-name').clear()
        cy.get('#user-name').type('random')
        cy.get('#password').clear()
        cy.get('#password').type('random')
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('Test logout', () => {
        cy.TestLoginWithvalidData()
        cy.get('#react-burger-menu-btn').click()
        cy.get('.bm-menu').should('be.visible')
        cy.get('#logout_sidebar_link').click()
        cy.get('.login_logo').should('contain.text', 'Swag Labs')
    });

    it('Should display add to cart', () => {
        cy.TestLoginWithvalidData()
        cy.url().should('include', 'inventory.html')
        cy.get('#item_4_title_link > div:nth-child(1)').click()
        cy.get('.inventory_details_name').should('be.visible')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
         
    });
    
    it('Should display shopping cart container', () => {
        cy.TestLoginWithvalidData()
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', 'cart.html');
        cy.get('.shopping_cart_link').should('be.visible')
        cy.get('#checkout').click()
        cy.get('.title').should('be.visible')
        cy.get('#first-name').clear()
        cy.get('#first-name').type('pareana')
        cy.get('#last-name').clear()
        cy.get('#last-name').type('silalahi')
        cy.get('#postal-code').clear()
        cy.get('#postal-code').type(123)
        cy.get('#continue').click()
        cy.url().should('include', 'checkout-step-two.html')
        cy.get('.header_secondary_container').should('have.text', 'Checkout: Overview')
        cy.get('#finish').click()
        cy.url().should('include', 'checkout-complete.html')
        cy.get('.complete-header').should('contain.text', 'Thank you for your order!')


        
         
        
    });
})