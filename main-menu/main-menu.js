#!/usr/bin/env node
// Requiring dependencies
const menu = require('node-menu');
const chalk = require('chalk');
const figlet = require('figlet');
// Customize import function
const { displayProducts } = require('../product/show-product');
const { displayDiscountList } = require('../discount/show-discount');
// Exporting the functions
module.exports = {
  // Display main menu function
  displayMainMenu: () => {
    // Print menu
    menu.addDelimiter('-', 40, 'Main Menu')
    .addItem(
      'Check Out',
      () => {
        menu.resetMenu();
        displayCheckOutMenu();
      })
    .addItem(
      'Show Products',
      () => {
        displayProducts();
      })
    .addItem(
      'Update Products',
      () => {
        menu.resetMenu();
        displayUpdateProductMenu();
      })
    .addItem(
      'Show Discount',
      () => {
        displayDiscountList();
      })
    .addItem(
      'Update Discount',
      () => {
        menu.resetMenu();
        displayUpdateDiscountMenu();
      })
    .addDelimiter('-', 40)
    .disableDefaultHeader()
    .customHeader(function() {
      process.stdout.write(
        chalk.white(
          figlet.textSync('Shopping-R-US')
        )
      );
      process.stdout.write('\n\n');
    })
    .disableDefaultPrompt()
    .customPrompt(function() {
      process.stdout.write("\nPlease select an option");
    })
    .start()
  } 
}
// To avoid collision of circular dependency, the import menu should put below the code logic
const { displayCheckOutMenu } = require('../checkout/checkout-menu');
const { displayUpdateProductMenu } = require('../product/update-product');
const { displayUpdateDiscountMenu } = require('../discount/update-discount');
