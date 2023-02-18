describe("Test that any product can be added to the cart", () => {
  it("should validate that any product can be added to the cart", () => {
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

    cy.get(4000);
    //select the size
    cy.get("#option-label-size-143-item-176").click();

    //select the color
    cy.get("#option-label-color-93-item-58").click();

    //fill in the quantity
    cy.get("#qty").clear().type("1");

    //add item to the cart
    cy.get("#product-addtocart-button").click();

    //verify the message after adding the item into the cart
    cy.get(".message-success").contains(
      "You added Arcadio Gym Short to your shopping cart."
    );

    //click on the show cart icon
    cy.get(".showcart").click();

    //verify the item that was added to the cart is displayed in the list
    cy.get(
      "#mini-cart > .item > :nth-child(1) > .product-item-details > .product-item-name > a"
    );
    //remove the added item
    cy.get(".product-item-details > .actions > .secondary > .action").click();

    //verify content of the remove modal
    cy.get("#modal-content-40 > div").contains(
      "Are you sure you would like to remove this item from the shopping cart?"
    );

    //click on the ok button to remove the item from the cart
    cy.get(".action-primary").click();

    //verify message after remove action is completed
    cy.get(".subtitle").contains("You have no items in your shopping cart.");
  });
});
