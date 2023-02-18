describe('Test search is working correctly with a valid product', () => {
  it('It should validate the search is working correctly with a valid product', () => {
    //cy.visit(Cypress.env('baseUrls'))
    cy.visit('https://magento.softwaretestingboard.com')

    //get Search and type any word
    cy.get('#search').type('Pants')

    //get search icon and click on it
    cy.get('#search_mini_form .actions .action').click()

    //get the Pants searched
    cy.get('h1').contains('Pants').should('be.visible')
  })
})