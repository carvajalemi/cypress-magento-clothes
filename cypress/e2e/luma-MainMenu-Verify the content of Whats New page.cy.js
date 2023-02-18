describe('Test the content of What is New page', () => {
  it('It should validate the contant of what is new page', () => {
    //cy.visit(Cypress.env('baseUrls'))
    cy.visit('https://magento.softwaretestingboard.com')

    //get What's new option menu and click over it
    cy.get('#ui-id-3').click()

    //verify should be on the What's new url
    cy.url().should('include', '/what-is-new.html')

    //verify the content of the page
    //verify NEW IN WOMEN'S section
    cy.get('.categories-menu > :nth-child(1) > span').should('be.visible')
    
    //verify NEW IN MEN'S section
    cy.get('.categories-menu > :nth-child(3) > span').should('be.visible')

    //verify Compare Products section
    cy.get('#block-compare-heading').should('be.visible')

    //verify My Wish List section
    cy.get('.block-wishlist > .block-title > strong').should('be.visible')

  })
})