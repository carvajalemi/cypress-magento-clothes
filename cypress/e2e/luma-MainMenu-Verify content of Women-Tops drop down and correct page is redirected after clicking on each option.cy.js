describe("Test content of Women-Tops drop down and correct page is redirected after clicking on each option", () => {
  it("should validate content of Women-Tops drop down and correct page is redirected after clicking on each option", () => {
    cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");

    //Get Women menu option and do mouserover to expand drop down options
    cy.get("#ui-id-4 > :nth-child(2)").trigger("mouseover").contains("Women");
    //Verify Tops option is displayed in the drop down
    cy.get("#ui-id-9").trigger("mouseover").contains("Tops");
    //Content Tops drop down: Jackets and verify the correct page is opened
    cy.get("#ui-id-11").trigger("mouseover").contains("Jackets").click();
    //Verify title of the page
    cy.get(".base").contains("Jackets");

    //Go back to Women page
    cy.get("#ui-id-4 > :nth-child(2)").trigger("mouseover").contains("Women");
    //Go back to Tops option is displayed in the drop down
    cy.get("#ui-id-9").trigger("mouseover").contains("Tops");
    //Content Tops drop down: Hoodies & Sweatshirts and verify the correct page is opened
    cy.get("#ui-id-12")
      .trigger("mouseover")
      .contains("Hoodies & Sweatshirts")
      .click();
    //Verify title of the page
    cy.get(".base").contains("Hoodies & Sweatshirts");

    //Go back to Women page
    cy.get("#ui-id-4 > :nth-child(2)").trigger("mouseover").contains("Women");
    //Go back to Tops option is displayed in the drop down
    cy.get("#ui-id-9").trigger("mouseover").contains("Tops");
    //Content Tops drop down: Tees and verify the correct page is opened
    cy.get("#ui-id-13").trigger("mouseover").contains("Tees").click();
    //Verify title of the page
    cy.get(".base").contains("Tees");

    //Go back to Women page
    cy.get("#ui-id-4 > :nth-child(2)").trigger("mouseover").contains("Women");
    //Go back to Tops option is displayed in the drop down
    cy.get("#ui-id-9").trigger("mouseover").contains("Tops");
    //Content Tops drop down: Bras & Tanks and verify the correct page is opened
    cy.get("#ui-id-14").trigger("mouseover").contains("Bras & Tanks").click();
    //Verify title of the page
    cy.get(".base").contains("Bras & Tanks");
  });
});
