describe('Test that Details, More Information and Reviews tabs are displayed the correct content', () => {
  it('Should validate that Details, More Information and Reviews tabs are displayed the correct content', () => {
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

    //verify the tabs and content
    cy.get("#tab-label-description-title").click();
    cy.get(".value > :nth-child(1)").contains("The Pierce Gym Short");
    cy.get("#tab-label-additional-title");
    cy.get("tbody > :nth-child(1) > .label").contains("Style");
    cy.get("#tab-label-reviews-title");
    cy.get(".legend > strong").contains("Pierce Gym Short");
    
   
  })
})