describe('Test after clicking the Grid icon, the items of the page are displayed in grid view', () => {
  it('It should validate after clicking the Grid icon, the items of the page are displayed in grid view', () => {
    //cy.visit(Cypress.env('baseUrls'))
    cy.visit('https://magento.softwaretestingboard.com')

    //get Women menu and do a mouseover
    cy.get('#ui-id-4 > :nth-child(2)').trigger('mouseover')

    //get Women > Tops and do a mouseover
    cy.get('#ui-id-9').trigger('mouseover')

    //get Women> Tops> Jackets and click on it
    cy.get('#ui-id-11').trigger('mouseover').click()

    //verify should be on the Women> Tops> Jackets url
    cy.url().should('include', '/women/tops-women/jackets-women.html')
    cy.wait(5000)
    
    //Click on the list icon
    cy.get(':nth-child(3) > .modes > #mode-list').trigger('click')
    cy.wait(5000)
    //verify the content products in list
    cy.get('[class="products wrapper list products-list"]').should('exist')
    
    //Click on the Grid icon
    cy.get(':nth-child(3) > .modes > #mode-grid').trigger('click')
    cy.wait(5000)

    //verify the content products in Grid
    cy.get('[class="products wrapper grid products-grid"]').should('exist')
   
  })
})