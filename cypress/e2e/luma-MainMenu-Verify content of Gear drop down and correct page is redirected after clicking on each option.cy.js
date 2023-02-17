describe("Test  content of Gear drop down and correct page is redirected after clicking on each option", () => {
  it("should validate content of Gear drop down and correct page is redirected after clicking on each option", () => {
    cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");

    //Get Gear menu option and do mouserover to expand drop down options
    cy.get("#ui-id-6 > :nth-child(2)").trigger("mouseover").contains("Gear");
    //Content Gear drop down: Bags and verify the correct page is opened
    cy.get("#ui-id-25").trigger("mouseover").contains("Bags").click();
    //Verify title of the page
    cy.get(".base").contains("Bags");

    //Go back to Gear page
    cy.get("#ui-id-6 > :nth-child(2)").trigger("mouseover").contains("Gear");
    //Content Gear drop down: Fitness Equipment and verify the correct page is opened
    cy.get("#ui-id-26")
      .trigger("mouseover")
      .contains("Fitness Equipment")
      .click();
    //Verify title of the page
    cy.get(".base").contains("Fitness Equipment");

    //Go back to Gear page
    cy.get("#ui-id-6 > :nth-child(2)").trigger("mouseover").contains("Gear");
    //Content Gear drop down: Watches and verify the correct page is opened
    cy.get("#ui-id-27").trigger("mouseover").contains("Watches").click();
    //Verify title of the page
    cy.get(".base").contains("Watches");
  });
});
