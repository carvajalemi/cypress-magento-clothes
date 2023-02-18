describe("Test search is working correctly with a product that doesn't exist", () => {
  it("should validate search is working correctly with a product that doesn't exist", () => {
    cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");

    //Get Search option and search hola text
    cy.get("#search").type("hola");

    //Hit Search button
    cy.get('[title="Search"]').click();

    //Verify the message after the search is applied
    cy.get(".column > .message > div").contains(
      "Your search returned no results."
    );
  });
});
