const menu = require('node-menu');
const { updateDiscount } = require('../_db/discount.db');

module.exports = {
  displayUpdateDetailDiscountMenu: (discount) => {

    const discountEntries = Object.entries(discount);

    menu.addDelimiter('-', 40, discount.discountName)
    .disableDefaultHeader()
    .disableDefaultPrompt()
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

const { displayUpdateDiscountMenu } = require('./update-discount');
