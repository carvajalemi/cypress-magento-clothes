describe('Test Men-Tops-Tees-Sort drop down is displayed the correct options and each options is working correctly', () => {
  it('It should validate Men-Tops-Tees-Sort drop down is displayed the correct options and each options is working correctly', () => {
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
    
    // get the sort drop down and select Product Name option
    cy.get(':nth-child(3) > .toolbar-sorter > #sorter').select('name').should('have.value', 'name')

    //verify the results displayed by product name
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').contains('Aero Daily Fitness Tee')

    // get the sort drop down and select Price option
    cy.get(':nth-child(3) > .toolbar-sorter > #sorter').select('price').should('have.value', 'price')
    
    //verify the results displayed by product name
    cy.get(':nth-child(2) > .product-item-info > .details > .name > .product-item-link').contains('Aero Daily Fitness Tee')

    // get the sort drop down and select Position option
    cy.get(':nth-child(3) > .toolbar-sorter > #sorter').select('position').should('have.value', 'position')

    //verify the results displayed by product name
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').contains('Strike Endurance Tee')
    
    
  })
})