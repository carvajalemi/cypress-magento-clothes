describe("Test after clicking the List icon, the items of the page are displayed in list view", () => {
  it("should validate after clicking the List icon, the items of the page are displayed in list view", () => {
    cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");

    //Get Women menu option and do mouserover to expand drop down options
    cy.get("#ui-id-4 > :nth-child(2)").trigger("mouseover").contains("Women");
    //Verify Tops option is displayed in the drop down
    cy.get("#ui-id-9").trigger("mouseover").contains("Tops");
    //Content Tops drop down: Jackets and verify the correct page is opened
    cy.get("#ui-id-11").trigger("mouseover").contains("Jackets").click();
    //Verify title of the page
    cy.get(".base").contains("Jackets");
    cy.wait(5000);
    //Click on the list icon
    cy.get(":nth-child(3) > .modes > #mode-list").trigger("click");
    //Verify the content of the page after clicking the list icon
    cy.get('[class="products wrapper list products-list"]').should("exist");
    cy.get('[class="products wrapper grid products-list"]').should("not.exist");
  });
});
