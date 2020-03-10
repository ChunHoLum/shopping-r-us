#!/usr/bin/env node
// Requiring dependencies
const menu = require('node-menu');
// Customize import function
const { getProductItems } = require('../_db/products.db');
const { getCart, addToCart, displayCart, clearCart } = require('../cart/cart');
const { checkoutApply } = require('../checkout/checkout-apply');
const { getActiveDiscountList } = require('../_db/discount.db');
// Exporting the functions
module.exports = {
  displayCheckOutMenu: () => {
    // Print menu
    menu.addDelimiter('-', 40, 'Check Out');
    // Add menu item for each product item
    const productitems = getProductItems();
    productitems.forEach(item => {
      menu.addItem(
        item.Name,
        () => {
          // Add the item name to cart
          addToCart(item.SKU)
        }
      )
    });
    menu.addDelimiter('-', 40)
    .addItem(
      'Back to Main Menu',
      () => {
        menu.resetMenu();
        displayMainMenu();
      }
    )
    .addItem(
      'Check Out',
      () => {
        // Apply check out rules 
        checkoutApply(getCart(), getActiveDiscountList());
        // clear the cart
        clearCart();
      }
    )
    .disableDefaultHeader()
    .disableDefaultPrompt()
    .customPrompt(function() {
      process.stdout.write("\nCurrent Scaned Item: ", displayCart());
    })
    .start()
  } 
}
// To avoid collision of circular dependency, the import menu should put below the code logic
const { displayMainMenu } = require('../main-menu/main-menu');
