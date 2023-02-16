describe('Test content of Women>Bottoms drop down and correct page is redirected after clicking on each option', () => {
  it('It should validate the content of Women>Bottoms drop down and correct page is redirected after clicking on each option', () => {
    //cy.visit(Cypress.env('baseUrls'))
    cy.visit('https://magento.softwaretestingboard.com')

    //get Women menu and do a mouseover
    cy.get('#ui-id-4 > :nth-child(2)').trigger('mouseover')

    //get Women > bottoms and do a mouseover
    cy.get('#ui-id-10').trigger('mouseover')

    //get Women> bottoms> pants and click on it
    cy.get('#ui-id-15').trigger('mouseover').click()

    //verify should be on the Women> Bottoms > pants url
    cy.url().should('include', '/women/bottoms-women/pants-women.html')

    //get Women menu and do a mouseover
    cy.get('#ui-id-4 > :nth-child(2)').trigger('mouseover')

    //get Women > bottoms and do a mouseover
    cy.get('#ui-id-10').trigger('mouseover')

    //get Women> bottoms> shorts and click on it
    cy.get('#ui-id-16').trigger('mouseover').click()

    //verify should be on the Women> Bottoms > shorts url
    cy.url().should('include', '/women/bottoms-women/shorts-women.html')

  })
})