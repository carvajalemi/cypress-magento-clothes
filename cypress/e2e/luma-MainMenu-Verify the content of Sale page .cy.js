describe("Test content of of Sale page ", () => {
  it("should validate the content of Sale page ", () => {
    cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");

    //Click on Sales option
    cy.get("#ui-id-8 > span").click();

    //Verify Sale title section
    cy.get(".base").contains("Sale");

    //Verify WOMEN'S DEALS section
    cy.get(".categories-menu > :nth-child(1) > span").contains("Women's Deals");

    //Verify MEN'S DEALS section
    cy.get(".categories-menu > :nth-child(3) > span").contains("Mens's Deals");

    //Verify GEAR DEALS section
    cy.get(":nth-child(5) > span").contains("Gear Deals");

    //Verify Compare Products section
    cy.get("#block-compare-heading").contains("Compare Products");

    //Verify My Wish List section
    cy.get(".block-wishlist > .block-title > strong").contains("My Wish List");
  });
});
