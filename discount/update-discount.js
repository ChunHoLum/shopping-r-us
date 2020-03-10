#!/usr/bin/env node
// Requiring dependencies
const menu = require('node-menu');
// Customize import function
const { getActiveDiscountList, getInActiveDiscountList } = require('../_db/discount.db');
// Exporting the functions
module.exports = {
  displayUpdateDiscountMenu: () => {
    // Print menu
    menu.addDelimiter('-', 40, 'Active')
    .disableDefaultHeader()
    .disableDefaultPrompt()
    .customPrompt(function() {
      process.stdout.write("\n");
    })
    // Add menu item for each active discount 
    const activeDiscountList = getActiveDiscountList();
    activeDiscountList.forEach(discount => {
      menu.addItem(
        discount.discountName,
        () => {
          menu.resetMenu();
          displayUpdateDetailDiscountMenu(discount)
        }
      )
    });
    menu.addDelimiter('-', 40, 'Inactive')
    // Add menu item for each inactive discount 
    const inActiveDiscountList = getInActiveDiscountList();
    inActiveDiscountList.forEach(discount => {
      menu.addItem(
        discount.discountName,
        () => {
          menu.resetMenu();
          displayUpdateDetailDiscountMenu(discount)
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
    .start()
  }
}
// To avoid collision of circular dependency, the import menu should put below the code logic
const { displayUpdateDetailDiscountMenu } = require('./update-detail-discount');
const { displayMainMenu } = require('../main-menu/main-menu');
