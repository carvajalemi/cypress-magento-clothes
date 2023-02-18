describe('Test that the added item is removed from the Cart', () => {
  it('Should validate that the added item is removed from the Cart', () => {
    //cy.visit(Cypress.env('baseUrls'))
    cy.visit('https://magento.softwaretestingboard.com')

    //get Men menu and do a mouseover
    cy.get('#ui-id-5 > :nth-child(2)').trigger('mouseover')

    //get Men > Bottons and do a mouseover
    cy.get('#ui-id-18').trigger('mouseover')

    //get Men> Bottons> Shorts and click on it
    cy.get('#ui-id-24').trigger('mouseover').click()

    //verify should be on the Men> Bottoms > Shorts url
    cy.url().should('include', '/men/bottoms-men/shorts-men.html')

    //get one item and click on it
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()

    //first image is displayed
    cy.get('[src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/4eb2c46e52caa44ad0c1a1e7a8bca863/m/s/msh12-red_main_1.jpg"]').should('be.visible')
    cy.wait(5000)

    // get Size and click on it
    cy.get('#option-label-size-143-item-175').click()

    //get Color and click on it
    cy.get('#option-label-color-93-item-49').click()

    //get the 'Add to cart' button and click on it
    cy.get('#product-addtocart-button').click()

    //verify the message is displayed
    cy.get('.message-success').should('be.visible')

    //get the cart
    cy.get('.showcart > .counter').click()

    //verify the item is in the cart
    cy.get('.minicart-items-wrapper').should('be.visible')

    //remove the added item
    cy.get('.product-item-details > .actions > .secondary > .action').click()

    //verify content of the remove modal
    cy.get('#modal-content-40 > div').contains('Are you sure you would like to remove this item from the shopping cart?')

    //click on the ok button to remove the item from the cart
    cy.get('.action-primary').click()

    //verify message after remove action is completed
    cy.get('.subtitle').contains('You have no items in your shopping cart.')

    //close message pop up
    cy.get('#btn-minicart-close').click()
  })
})