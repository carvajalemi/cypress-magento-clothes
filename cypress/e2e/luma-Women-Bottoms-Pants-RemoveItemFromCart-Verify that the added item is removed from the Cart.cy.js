describe("Test that the added item is removed from the Cart", () => {
  it("should validate that the added item is removed from the Cart", () => {
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

    //verify the type of the selected pants
    cy.get(".base").contains("Portia Capri");

    cy.wait(5000);
    //select the size
    cy.get("#option-label-size-143-item-171").click();

    //select the color
    cy.get("#option-label-color-93-item-53").click();

    //fill in the quantity
    cy.get("#qty").clear().type("1");

    //add item to the cart
    cy.get("#product-addtocart-button").click();

    //verify the message after adding the item into the cart
    cy.get(".message-success").contains(
      "You added Portia Capri to your shopping cart."
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
    cy.get("#modal-content-38 > div").contains(
      "Are you sure you would like to remove this item from the shopping cart?"
    );

    //click on the ok button to remove the item from the cart
    cy.get(".action-primary").click();

    //verify message after remove action is completed
    cy.get(".subtitle").contains("You have no items in your shopping cart.");
  });
});
