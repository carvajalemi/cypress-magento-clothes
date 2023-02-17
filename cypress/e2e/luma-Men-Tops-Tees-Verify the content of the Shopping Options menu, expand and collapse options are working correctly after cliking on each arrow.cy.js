describe("Test the content of the Shopping Options menu, expand and collapse options are working correctly after cliking on each arrow", () => {
  it("should validate the content of the Shopping Options menu, expand and collapse options are working correctly after cliking on each arrow", () => {
    cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");

    //Get Men menu option and do mouserover to expand drop down options
    cy.get("#ui-id-5 > :nth-child(2)").trigger("mouseover").contains("Men");
    //Verify Tops option is displayed in the drop down
    cy.get("#ui-id-17").trigger("mouseover").contains("Tops");
    //Content Tops drop down: Tees and verify the correct page is opened
    cy.get("#ui-id-21").trigger("mouseover").contains("Tees").click();
    //Verify title of the page
    cy.get(".base").contains("Tees");

    //Verify the Shopping Options section
    cy.get(".block-subtitle").contains("Shopping Options");

    //Expand the Style option
    cy.get(":nth-child(1) > .filter-options-title").contains("Style").click();
    //Verify content after expanding the option
    cy.get(
      'a[href="https://magento.softwaretestingboard.com/men/tops-men/tees-men.html?style_general=135"]'
    ).should("contain", "Tee");
    //Collapse Style option
    cy.get(":nth-child(1) > .filter-options-title").contains("Style").click();
    //Verify content after collapsing the option
    cy.get("Tee").should("not.exist");

    //Expand the Size option
    cy.get(":nth-child(2) > .filter-options-title").contains("Size").click();
    //Verify content after expanding the option
    cy.get(
      '[href="https://magento.softwaretestingboard.com/men/tops-men/tees-men.html?size=166"] > .swatch-option'
    ).contains("XS");
    //Collapse option
    cy.get(":nth-child(2) > .filter-options-title").contains("Size").click();
    //Verify content after collapsing the option
    cy.get(
      '[href="https://magento.softwaretestingboard.com/men/tops-men/tees-men.html?size=166"] > .swatch-option'
    ).should("not.be.visible");

    //Expand the Price option
    cy.get(":nth-child(3) > .filter-options-title").contains("Price").click();
    //Verify content after expanding the option
    cy.get(".items > :nth-child(1) > a > :nth-child(2)").should("be.visible");
    //Collapse option
    cy.get(":nth-child(3) > .filter-options-title").contains("Price").click();
    //Verify content after collapsing the option
    cy.get(".items > :nth-child(1) > a > :nth-child(2)").should("be.hidden");

    //Expand the Color option
    cy.get(":nth-child(4) > .filter-options-title").contains("Color").click();
    //Verify content after expanding the option
    cy.get(
      '[href="https://magento.softwaretestingboard.com/men/tops-men/tees-men.html?color=49"] > .swatch-option'
    ).should("be.visible");
    //Collapse option
    cy.get(":nth-child(4) > .filter-options-title").contains("Color").click();
    //Verify content after collapsing the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(2) > a"
    ).should("not.exist");

    //Expand the Material option
    cy.get(":nth-child(5) > .filter-options-title")
      .contains("Material")
      .click();
    //Verify content after expanding the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(2) > a"
    ).should("be.visible");
    //Collapse option
    cy.get(":nth-child(5) > .filter-options-title")
      .contains("Material")
      .click();
    //Verify content after collapsing the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(2) > a"
    ).should("not.exist");

    //Expand the Eco Collection option
    cy.get(":nth-child(6) > .filter-options-title")
      .contains("Eco Collection")
      .click();
    //Verify content after expanding the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(1) > a"
    ).contains("Yes");
    //Collapse option
    cy.get(":nth-child(6) > .filter-options-title")
      .contains("Eco Collection")
      .click();
    //Verify content after collapsing the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(1) > a"
    ).should("not.exist");

    //Expand the PERFORMANCE FABRIC option
    cy.get(":nth-child(7) > .filter-options-title")
      .contains("Performance Fabric")
      .click();
    //Verify content after expanding the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(1) > a"
    ).contains("Yes");
    //Collapse option
    cy.get(":nth-child(7) > .filter-options-title")
      .contains("Performance Fabric")
      .click();
    //Verify content after collapsing the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(1) > a"
    ).should("not.exist");

    //Expand the Erin Recommends option
    cy.get(":nth-child(8) > .filter-options-title")
      .contains("Erin Recommends")
      .click();
    //Verify content after expanding the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(1) > a"
    ).contains("Yes");
    //Collapse option
    cy.get(":nth-child(8) > .filter-options-title")
      .contains("Erin Recommends")
      .click();
    //Verify content after collapsing the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(1) > a"
    ).should("not.exist");

    //Expand the New option
    cy.get(":nth-child(9) > .filter-options-title").contains("New").click();
    //Verify content after expanding the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(1) > a"
    ).contains("Yes");
    //Collapse option
    cy.get(":nth-child(9) > .filter-options-title").contains("New").click();
    //Verify content after collapsing the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(1) > a"
    ).should("not.exist");

    //Expand the Sale option
    cy.get(":nth-child(10) > .filter-options-title").contains("Sale").click();
    //Verify content after expanding the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(1) > a"
    ).contains("Yes");
    //Collapse option
    cy.get(":nth-child(10) > .filter-options-title").contains("Sale").click();
    //Verify content after collapsing the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(1) > a"
    ).should("not.exist");

    //Expand the Pattern option
    cy.get(":nth-child(11) > .filter-options-title")
      .contains("Pattern")
      .click();
    //Verify content after expanding the option
    cy.get(".active > .filter-options-content > .items > .item > a").contains(
      "Solid"
    );
    //Collapse option
    cy.get(":nth-child(11) > .filter-options-title")
      .contains("Pattern")
      .click();
    //Verify content after collapsing the option
    cy.get(".active > .filter-options-content > .items > .item > a").should(
      "not.exist"
    );

    //Expand the Climate option
    cy.get(":nth-child(12) > .filter-options-title")
      .contains("Climate")
      .click();
    //Verify content after expanding the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(1) > a"
    ).contains("All-Weather");
    //Collapse option
    cy.get(":nth-child(12) > .filter-options-title")
      .contains("Climate")
      .click();
    //Verify content after collapsing the option
    cy.get(
      ".active > .filter-options-content > .items > :nth-child(1) > a"
    ).should("not.exist");
  });
});
