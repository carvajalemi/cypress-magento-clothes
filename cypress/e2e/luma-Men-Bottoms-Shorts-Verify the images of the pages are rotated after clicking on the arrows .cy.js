describe("Test the images of the pages are rotated after clicking on the arrows", () => {
  it("should validate the images of the pages are rotated after clicking on the arrows", () => {
    cy.visit("https://magento.softwaretestingboard.com/what-is-new.html");

    //Get Men menu option and do mouserover to expand drop down options
    cy.get("#ui-id-5 > :nth-child(2)").trigger("mouseover").contains("Men");
    //Verify Bottoms option is displayed in the drop down
    cy.get("#ui-id-18").trigger("mouseover").contains("Bottoms");
    //Content Bottoms drop down: Shorts and verify the correct page is opened
    cy.get("#ui-id-24").trigger("mouseover").contains("Shorts").click();
    //Verify title of the page
    cy.get(".base").contains("Shorts");

    //Click on any of the shorts of the list
    cy.get(
      ":nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo"
    ).click();

    //Verify the title of the selected short
    cy.get(".base").contains("Arcadio Gym Short");

    //Verify the > arrow exist and click over it
    cy.get(".fotorama__arr--next > .fotorama__arr__arr").click();
    //Verify the image and the arrow that is not displayed
    cy.get(
      '[href="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/4eb2c46e52caa44ad0c1a1e7a8bca863/m/s/msh11-blue_back_1.jpg"]'
    );
    cy.get(".fotorama__arr--next > .fotorama__arr__arr").should("be.hidden");

    //Verify the < arrow exist and click over it
    cy.get(".fotorama__arr--prev > .fotorama__arr__arr").click();
    //Verify the image and the arrow that is not displayed
    cy.get(
      '[href="https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/4eb2c46e52caa44ad0c1a1e7a8bca863/m/s/msh11-blue_main_1.jpg"]'
    );
    cy.get(".fotorama__arr--prev > .fotorama__arr__arr").should("be.hidden");
  });
});
