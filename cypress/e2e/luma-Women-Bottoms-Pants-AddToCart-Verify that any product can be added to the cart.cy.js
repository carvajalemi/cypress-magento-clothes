describe('Test Women-Bottoms-Pants-AddToCart-Verify that any product can be added to the cart', () => {
  it('It should validate Women-Bottoms-Pants-AddToCart-Verify that any product can be added to the cart', () => {
    //cy.visit(Cypress.env('baseUrls'))
    cy.visit('https://magento.softwaretestingboard.com')

    //get Women menu and do a mouseover
    cy.get('#ui-id-4 > :nth-child(2)').trigger('mouseover')

    //get Women > Bottoms and do a mouseover
    cy.get('#ui-id-10').trigger('mouseover')

    //get Women> Bottoms> Pants and click on it
    cy.get('#ui-id-15').trigger('mouseover').click()

    //verify should be on the Men> Bottoms> Pants url
    cy.url().should('include', 'women/bottoms-women/pants-women.html')
    
    //get one item and click on it
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    
    //first image is displayed
    cy.get('[src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/4eb2c46e52caa44ad0c1a1e7a8bca863/w/p/wp13-orange_main_1.jpg"]').should('be.visible')
    cy.wait(5000)

    // get Size and click on it
    cy.get('#option-label-size-143-item-171').click()

    //get Color and click on it
    cy.get('#option-label-color-93-item-50').click()

    //get the 'Add to cart' button and click on it
    cy.get('#product-addtocart-button').click()

    //verify the message is displayed
    cy.get('.message-success').should('be.visible')

    //get the cart
    cy.get('.showcart > .counter').click()

    //verify the item is in the cart
    cy.get('.minicart-items-wrapper').should('be.visible')


  })
})