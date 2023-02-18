describe('Test after clicking the List icon, the items of the page are displayed in list view', () => {
  it('It should validate after clicking the List icon, the items of the page are displayed in list view', () => {
    //cy.visit(Cypress.env('baseUrls'))
    cy.visit('https://magento.softwaretestingboard.com')

    //get Men menu and do a mouseover
    cy.get('#ui-id-5 > :nth-child(2)').trigger('mouseover')

    //get Men > Tops and do a mouseover
    cy.get('#ui-id-17').trigger('mouseover')

    //get Men> Tops> Tees and click on it
    cy.get('#ui-id-21').trigger('mouseover').click()

    //verify should be on the Men> Bottoms > pants url
    cy.url().should('include', '/men/tops-men/tees-men.html')
    cy.wait(5000)
    
    //Click on the list icon
    cy.get(':nth-child(3) > .modes > #mode-list').trigger('click')
    cy.wait(5000)
    
    //verify the content products in list
    cy.get('[class="products wrapper list products-list"]').should('exist')
    
    //verify the content products in Grid is not  displayed
    cy.get('[class="products wrapper grid products-grid"]').should('not.exist')
  })
})