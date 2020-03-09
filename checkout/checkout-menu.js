const menu = require('node-menu');
const { getProductItems } = require('../_db/products.db');
const { getCart, updateCart, displayCart } = require('../cart/cart');


module.exports = {

  displayCheckOutMenu: () => {
    menu.addDelimiter('-', 40, 'Check Out');

    const productitems = getProductItems();
    productitems.forEach(item => {
      menu.addItem(
        item.Name,
        () => {
          updateCart(item.SKU)
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
        menu.resetMenu();
        displayMainMenu();
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
const { displayMainMenu } = require('../main-menu/main-menu');
