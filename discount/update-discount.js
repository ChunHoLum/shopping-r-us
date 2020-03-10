const menu = require('node-menu');
const { getProductItems, updateProductItems } = require('../_db/products.db');
const { getDiscountList, getActiveDiscountList, getInActiveDiscountList } = require('../_db/discount.db');

module.exports = {
  displayUpdateDiscountMenu: () => {
    menu.addDelimiter('-', 40, 'Active')
    .disableDefaultHeader()
    .disableDefaultPrompt()
    .customPrompt(function() {
      process.stdout.write("\n");
    })

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
      'Check Current Price',
      () => {

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

const { displayUpdateDetailDiscountMenu } = require('./update-detail-discount');
const { displayMainMenu } = require('../main-menu/main-menu');
