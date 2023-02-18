describe('Test content of Men>Bottoms drop down and correct page is redirected after clicking on each option', () => {
  it('It should validate the content of Men>Bottoms drop down and correct page is redirected after clicking on each option', () => {
    //cy.visit(Cypress.env('baseUrls'))
    cy.visit('https://magento.softwaretestingboard.com')

    //get Men menu and do a mouseover
    cy.get('#ui-id-5 > :nth-child(2)').trigger('mouseover')

    //get Men > bottoms and do a mouseover
    cy.get('#ui-id-18').trigger('mouseover')

    //get Men> bottoms> pants and click on it
    cy.get('#ui-id-23').trigger('mouseover').click()

    //verify should be on the Men> Bottoms > pants url
    cy.url().should('include', '/men/bottoms-men/pants-men.html')

    //get Men menu and do a mouseover
    cy.get('#ui-id-5 > :nth-child(2)').trigger('mouseover')

    //get Men > bottoms and do a mouseover
    cy.get('#ui-id-18').trigger('mouseover')

    //get Men> bottoms> pants and click on it
    cy.get('#ui-id-24').trigger('mouseover').click()

    //verify should be on the Men> Bottoms > pants url
    cy.url().should('include', '/men/bottoms-men/shorts-men.html')
  })
})