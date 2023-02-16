describe('Test Women-Bottoms-Pants the images of the pages are rotated after clicking on the arrows ', () => {
  it('It should validate Women-Bottoms-Pants the images of the pages are rotated after clicking on the arrows', () => {
    //cy.visit(Cypress.env('baseUrls'))
    cy.visit('https://magento.softwaretestingboard.com')

    //get Men menu and do a mouseover
    cy.get('#ui-id-5 > :nth-child(2)').trigger('mouseover')

    //get Men > Bottoms and do a mouseover
    cy.get('#ui-id-18').trigger('mouseover')

    //get Men> Bottoms> Pants and click on it
    cy.get('#ui-id-23').trigger('mouseover').click()

    //verify should be on the Men> Bottoms> Pants url
    cy.url().should('include', '/men/bottoms-men/pants-men.html')
    
    //get one item and click on it
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()

    //first image is displayed
    cy.get('[src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/4eb2c46e52caa44ad0c1a1e7a8bca863/m/p/mp12-black_main_1.jpg"]').should('be.visible')
   
    //click on arrow to see the second image
    cy.get('.fotorama__arr--next > .fotorama__arr__arr').click()

    //second image is displayed
    cy.get('[src="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/4eb2c46e52caa44ad0c1a1e7a8bca863/m/p/mp12-black_back_1.jpg"]').should('be.visible')
  })
})