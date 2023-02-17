describe("Test after clicking the Grid icon, the items of the page are displayed in grid view", () => {
  it("should validate after clicking the Grid icon, the items of the page are displayed in grid view", () => {
    cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");

    //Get Men menu option and do mouserover to expand drop down options
    cy.get("#ui-id-5 > :nth-child(2)").trigger("mouseover").contains("Men");
    //Verify Tops option is displayed in the drop down
    cy.get("#ui-id-17").trigger("mouseover").contains("Tops");
    //Content Tops drop down: Tees and verify the correct page is opened
    cy.get("#ui-id-21").trigger("mouseover").contains("Tees").click();
    //Verify title of the page
    cy.get(".base").contains("Tees");

    cy.wait(5000);
    //Click on the list icon
    cy.get(":nth-child(3) > .modes > .active");

    //Verify the content of the page when the list icon is clickked by default
    cy.get('[class="products wrapper grid products-grid"]').should("exist");
    cy.get('[class="products wrapper list products-grid"]').should("not.exist");
  });
});
