describe("Test that the Sort drop down is displayed the correct options and each options is working correctly", () => {
  it("should validate that the Sort drop down is displayed the correct options and each options is working correctly", () => {
    cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");

    //Get Women menu option and do mouserover to expand drop down options
    cy.get("#ui-id-4 > :nth-child(2)").trigger("mouseover").contains("Women");
    //Verify Tops option is displayed in the drop down
    cy.get("#ui-id-9").trigger("mouseover").contains("Tops");
    //Content Tops drop down: Jackets and verify the correct page is opened
    cy.get("#ui-id-11").trigger("mouseover").contains("Jackets").click();
    //Verify title of the page
    cy.get(".base").contains("Jackets");

    //get the drop down and select Product Name
    cy.get(":nth-child(3) > .toolbar-sorter > #sorter")
      .select("Product Name")
      .should("have.value", "name");

    //Verify the results are ordered by product name
    cy.get(
      ":nth-child(1) > .product-item-info > .details > .name > .product-item-link"
    ).contains("Adrienne Trek Jacket");
    cy.get(
      ":nth-child(2) > .product-item-info > .details > .name > .product-item-link"
    ).contains("Augusta Pullover Jacket");

    //get the drop down and select Position
    cy.get(":nth-child(3) > .toolbar-sorter > #sorter")
      .select("Position")
      .should("have.value", "position");

    //Verify the results are ordered by position
    cy.get(
      ":nth-child(1) > .product-item-info > .details > .name > .product-item-link"
    ).contains("Olivia 1/4 Zip Light Jacket");
    cy.get(
      ":nth-child(2) > .product-item-info > .details > .name > .product-item-link"
    ).contains("Juno Jacket");

    //get the drop down and select Price
    cy.get(":nth-child(3) > .toolbar-sorter > #sorter")
      .select("Price")
      .should("have.value", "price");

    //Verify the results are ordered by price
    cy.get(
      ":nth-child(1) > .product-item-info > .details > .name > .product-item-link"
    ).contains("Jade Yoga Jacket");
    cy.get(
      ":nth-child(2) > .product-item-info > .details > .name > .product-item-link"
    ).contains("Josie Yoga Jacket");
  });
});
