const menu = require('node-menu');
const { getProductItems } = require('../_db/products.db');
const { getCart, addToCart, displayCart, clearCart } = require('../cart/cart');
const { checkoutApply } = require('../checkout/checkout-apply');
const { getActiveDiscountList } = require('../_db/discount.db');

module.exports = {

  displayCheckOutMenu: () => {
    menu.addDelimiter('-', 40, 'Check Out');

    const productitems = getProductItems();
    productitems.forEach(item => {
      menu.addItem(
        item.Name,
        () => {
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
        checkoutApply(getCart(), getActiveDiscountList());
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
const { displayMainMenu } = require('../main-menu/main-menu');
