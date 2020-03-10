#!/usr/bin/env node
// Requiring dependencies
const menu = require('node-menu');
// Customize import function
const { displayProducts } = require('./show-product');
const { getProductItems, updateProductItems } = require('../_db/products.db');
// Exporting the functions
module.exports = {
  displayUpdateProductMenu: () => {
    menu.addDelimiter('-', 40, 'Update Product Menu')
    .disableDefaultHeader()
    .disableDefaultPrompt()
    .customPrompt(function() {
      process.stdout.write("\nUpdate the price by input item number and new price with a space. For example: >> 1 550 to set Super Ipad to $550");
    })
    // List the product item that call the update function when trigger
    const productItems = getProductItems();
    productItems.forEach(item => {
      // Print menu
      menu.addItem(
        item.Name,
        (newPrice) => {
          try {
            const oldPrice = item.Price;
            updateProductItems(item.SKU, newPrice);
            console.log("Original Price:", oldPrice);
            console.log("New Price:", newPrice);
          } catch (err) {
            console.log("error: ", err)
          }
        },
        null,
        [
          {'name': 'new price', 'type': 'numeric'}
        ]
      )
    })
    menu.addDelimiter('-', 40)
    .addItem(
      'Check Current Price',
      () => {
        displayProducts();
      }
    )
    .addItem(
      'Back to Main Menu',
      () => {
        menu.resetMenu();
        displayMainMenu();
      }
    )
    .start()
  }
}
// To avoid collision of circular dependency, the import menu should put below the code logic
const { displayMainMenu } = require('../main-menu/main-menu');
