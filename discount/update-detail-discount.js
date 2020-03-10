#!/usr/bin/env node
// Requiring dependencies
const menu = require('node-menu');
// Customize import function
const { updateDiscount } = require('../_db/discount.db');
// Exporting the functions
module.exports = {
  displayUpdateDetailDiscountMenu: (discount) => {
    // Get the specific discount to array object
    const discountEntries = Object.entries(discount);
    // Print Menu
    menu.addDelimiter('-', 40, discount.discountName)
    .disableDefaultHeader()
    .disableDefaultPrompt()
    .customPrompt(function() {
      process.stdout.write("\nUpdate the discount element by input element number and new value. For example: >> 1 10 to set the Discount ID to 10");
    });
    discountEntries.forEach(entry => {
      menu.addItem(
        entry[0],
        (value) => {
          updateDiscount(discount.discountID, entry[0], value)
          menu.resetMenu();
          displayUpdateDiscountMenu();
        },
        null,
        [
          {'name': entry[1], 'type': 'string'}
        ]
      )
    })
    menu.addDelimiter('-', 40)
    .addItem(
      'Back to Update Discount Menu',
      () => {
        menu.resetMenu();
        displayUpdateDiscountMenu();
      }
    )
    .start()
  }
}
// To avoid collision of circular dependency, the import menu should put below the code logic
const { displayUpdateDiscountMenu } = require('./update-discount');
