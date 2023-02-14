describe("Test content of Men-Tops drop down and correct page is redirected after clicking on each option", () => {
  it("should validate content of Men-Tops drop down and correct page is redirected after clicking on each option", () => {
    cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");

    //Get Men menu option and do mouserover to expand drop down options
    cy.get("#ui-id-5 > :nth-child(2)").trigger("mouseover").contains("Men");
    //Verify Tops option is displayed in the drop down
    cy.get("#ui-id-17").trigger("mouseover").contains("Tops");
    //Content Tops drop down: Jackets and verify the correct page is opened
    cy.get("#ui-id-19").trigger("mouseover").contains("Jackets").click();
    //Verify title of the page
    cy.get(".base").contains("Jackets");

    //Go back to Men page
    cy.get("#ui-id-5 > :nth-child(2)").trigger("mouseover").contains("Men");
    //Go back to Tops option is displayed in the drop down
    cy.get("#ui-id-17").trigger("mouseover").contains("Tops");
    //Content Tops drop down: Hoodies & Sweatshirts and verify the correct page is opened
    cy.get("#ui-id-20")
      .trigger("mouseover")
      .contains("Hoodies & Sweatshirts")
      .click();
    //Verify title of the page
    cy.get(".base").contains("Hoodies & Sweatshirts");

    //Go back to Men page
    cy.get("#ui-id-5 > :nth-child(2)").trigger("mouseover").contains("Men");
    //Go back to Tops option is displayed in the drop down
    cy.get("#ui-id-17").trigger("mouseover").contains("Tops");
    //Content Tops drop down: Tees and verify the correct page is opened
    cy.get("#ui-id-21").trigger("mouseover").contains("Tees").click();
    //Verify title of the page
    cy.get(".base").contains("Tees");

    //Go back to Men page
    cy.get("#ui-id-5 > :nth-child(2)").trigger("mouseover").contains("Men");
    //Go back to Tops option is displayed in the drop down
    cy.get("#ui-id-17").trigger("mouseover").contains("Tops");
    //Content Tops drop down: Tanks and verify the correct page is opened
    cy.get("#ui-id-22").trigger("mouseover").contains("Tanks").click();
    //Verify title of the page
    cy.get(".base").contains("Tanks");
  });
});
