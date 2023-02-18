describe('Test content of Training drop down and correct page is redirected after clicking on each option', () => {
  it('It should validate the content of Training drop down and correct page is redirected after clicking on each option', () => {
    //cy.visit(Cypress.env('baseUrls'))
    cy.visit('https://magento.softwaretestingboard.com')

     //get training menu and do a mouseover
     cy.get('#ui-id-7 > :nth-child(2)').trigger('mouseover')

     //get Training> Video Download and click on it
    cy.get('#ui-id-28').trigger('mouseover').click()

    //verify should be on the Training> Video Download url
    cy.url().should('include', '/training/training-video.html')
  })
})