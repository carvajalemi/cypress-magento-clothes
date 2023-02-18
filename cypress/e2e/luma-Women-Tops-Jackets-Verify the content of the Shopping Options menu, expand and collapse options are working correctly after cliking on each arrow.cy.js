describe('Test Women-Tops-Jackets content of the Shopping Options menu, expand and collapse options are working correctly after cliking on each arrow', () => {
  it('It should validate Women-Tops-Jackets content of the Shopping Options menu, expand and collapse options are working correctly after cliking on each arrow', () => {
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
    
    //verify Shopping Options is displayed
    cy.contains('Shopping Options').should('be.visible')
    
    //Style
    //get Style section and click on it to expand
    cy.get(':nth-child(1) > .filter-options-title').click()
    
    //verify Insulated is displayed
    cy.get('li').should('contain', 'Insulated')
    
    //get Style section and click on it to collapse
    cy.get(':nth-child(1) > .filter-options-title').click()
    cy.wait(2000)
    
    //verify Insulated is not displayed
    cy.get('Insulated').should('not.exist')
    
    //Size
    //get Size section and click on it to expand
    cy.get(':nth-child(2) > .filter-options-title').click()
    
    //verify XS is displayed
    cy.get('[href="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?size=166"] > .swatch-option').should('contain', 'XS')

    //get Size section and click on it to collapse
    cy.get(':nth-child(2) > .filter-options-title').click()

    //verify XS is not displayed
    cy.get('[href="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?size=166"] > .swatch-option').should('not.visible')
    
    //Price
    //get Price section and click on it to expand
    cy.get(':nth-child(3) > .filter-options-title').click()
    
    //verify $30.00 is displayed
    cy.get('li').should('contain', '$30.00')
   
    //get Price section and click on it to collapse
    cy.get(':nth-child(3) > .filter-options-title').click()

    //verify $30.00 is not displayed
    cy.contains('$30.00').should('not.visible')
    
    //Color
    //get Color section and click on it to expand
    cy.get(':nth-child(4) > .filter-options-title').click()
    
    //verify black color is displayed
    cy.get('[href="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?color=49"] > .swatch-option').should('be.visible')
   
    //get Color section and click on it to collapse
    cy.get(':nth-child(4) > .filter-options-title').click()

    //verify black color is not displayed
    cy.get('[href="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?color=49"] > .swatch-option').should('not.visible')

    //Material
    //get Material section and click on it to expand
    cy.get(':nth-child(5) > .filter-options-title').click()
    
    //verify Cotton is displayed
    cy.get('li').should('contain', 'Cotton')
    
    //get Material section and click on it to collapse
    cy.get(':nth-child(5) > .filter-options-title').click()
    cy.wait(2000)
    //verify Cotton is not displayed
    cy.get('[href="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?material=33"] > .swatch-option').should('not.exist')

    //Eco Collection
    //get Eco Collection section and click on it to expand
    cy.get(':nth-child(6) > .filter-options-title').click()
    
    //verify Yes is displayed
    cy.get('li').should('contain', 'Yes')
   
    //get Eco Collection section and click on it to collapse
    cy.get(':nth-child(6) > .filter-options-title').click()

    //verify Yes is not displayed
    cy.get('[href="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?eco_collection=1"] > .swatch-option').should('not.exist')

    //Performance Fabric
    //get Performance Fabric section and click on it to expand
    cy.get(':nth-child(7) > .filter-options-title').click()
    
    //verify Yes is displayed
    cy.get('li').should('contain', 'Yes')
   
    //get Performance Fabric section and click on it to collapse
    cy.get(':nth-child(7) > .filter-options-title').click()

    //verify Yes is not displayed
    cy.get('[href="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?performance_fabric=1"] > .swatch-option').should('not.exist')

    //Erin Recommends
    //get Erin Recommends section and click on it to expand
    cy.get(':nth-child(8) > .filter-options-title').click()
    
    //verify No is displayed
    cy.get('li').should('contain', 'No')
   
    //get Erin Recommends section and click on it to collapse
    cy.get(':nth-child(8) > .filter-options-title').click()

    //verify No is not displayed
    cy.get('[href="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?erin_recommends=0"] > .swatch-option').should('not.exist')

    //New
    //get New section and click on it to expand
    cy.get(':nth-child(9) > .filter-options-title').click()
    
    //verify Yes is displayed
    cy.get('li').should('contain', 'Yes')
   
    //get New section and click on it to collapse
    cy.get(':nth-child(9) > .filter-options-title').click()

    //verify Yes is not displayed
    cy.get('[href="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?new=1"] > .swatch-option').should('not.exist')

    //Sale
    //get Sale section and click on it to expand
    cy.get(':nth-child(10) > .filter-options-title').click()
    
    //verify Yes is displayed
    cy.get('li').should('contain', 'Yes')
   
    //get Sale section and click on it to collapse
    cy.get(':nth-child(10) > .filter-options-title').click()

    //verify Yes is not displayed
    cy.get('[href="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?sale=1"] > .swatch-option').should('not.exist')

    //Pattern
    //get Pattern section and click on it to expand
    cy.get(':nth-child(11) > .filter-options-title').click()
    
    //verify Color-Blocked is displayed
    cy.get('li').should('contain', 'Color-Blocked')
    
    //get Pattern section and click on it to collapse
    cy.get(':nth-child(11) > .filter-options-title').click()

    //verify Color-Blocked is not displayed
    cy.get('[href="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?pattern=194"] > .swatch-option').should('not.exist')

    //Climate
    //get Climatesection and click on it to expand
    cy.get(':nth-child(12) > .filter-options-title').click()
    
    //verify Cold is displayed
    cy.get('li').should('contain', 'Cold')
   
    //get Climate section and click on it to collapse
    cy.get(':nth-child(12) > .filter-options-title').click()

    //verify Cold is not displayed
    cy.get('[href="https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html?climate=202"] > .swatch-option').should('not.exist')

  })
})