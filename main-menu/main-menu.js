const menu = require('node-menu');
const chalk = require('chalk');
const figlet = require('figlet');

const { displayProducts } = require('../product/show-product');
const { displayDiscountList } = require('../discount/show-discount');

module.exports = {

  displayMainMenu: () => {
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
      function() {
          console.log('1');
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

const { displayCheckOutMenu } = require('../checkout/checkout-menu');
const { displayUpdateProductMenu } = require('../product/update-product');