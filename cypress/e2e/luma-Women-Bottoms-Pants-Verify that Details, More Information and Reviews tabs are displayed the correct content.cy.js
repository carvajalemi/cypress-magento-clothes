describe("Test that Details, More Information and Reviews tabs are displayed the correct content", () => {
  it("should validate that the Details, More Information and Reviews tabs are displayed the correct content", () => {
    cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");

    //Get Women menu option and do mouserover to expand drop down options
    cy.get("#ui-id-4 > :nth-child(2)").trigger("mouseover").contains("Women");
    //Verify Bottoms option is displayed in the drop down
    cy.get("#ui-id-10").trigger("mouseover").contains("Bottoms");
    //Content Pants drop down: Jackets and verify the correct page is opened
    cy.get("#ui-id-15").trigger("mouseover").contains("Pants").click();
    //Verify title of the page
    cy.get(".base").contains("Pants");

    //get one of the pants and click over it
    cy.get(
      ":nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo"
    ).click();

    //verify the tabs and the content of the description
    cy.get("#tab-label-description-title").click();
    cy.get(".value > :nth-child(1)").contains("From yoga at dawn to evenings");
    cy.get("#tab-label-additional-title");
    cy.get("tbody > :nth-child(1) > .label").contains("Style");
    cy.get("#tab-label-reviews-title");
    cy.get(".legend > strong").contains("Portia Capri");
  });
});
