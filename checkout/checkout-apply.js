#!/usr/bin/env node
// Customize import function
const { getProductItems } = require('../_db/products.db');
const { xForYDealDiscountRule, bulkDiscountRule, bundleDiscountRule } = require('../_db/discount.db');
const { X_FOR_Y_DEAL_DISCOUNT, BULK_DISCOUNT, BUNDLE_DISCOUNT} = require('../_db/discountType.db');
const { getCart } = require('../cart/cart');
// Exporting the functions
module.exports = {
  checkoutApply: (cart, activeDiscountList) => {
    // Apply the active discount rules to check out
    activeDiscountList.forEach(discount => {
      if(discount.discountType == X_FOR_Y_DEAL_DISCOUNT){
        xForYDealDiscountRule(discount.SKU, discount.buyItemQuantity, discount.payItemQuantity, getCart());
      }
      if(discount.discountType == BULK_DISCOUNT){
        bulkDiscountRule(discount.SKU, discount.buyItemQuantity, discount.newDropPrice, getCart());
      }
      if(discount.discountType == BUNDLE_DISCOUNT){
        bundleDiscountRule(discount.buySKU, discount.freeSKU, discount.buyItemQuantity,discount.freeItemQuantity, getCart());
      }
    })

    let originalPrice = 0;
    let discountPrice = 0;
    const productItems = getProductItems();
    // Original Price and Discounted price calculation
    productItems.forEach(product => {
      cart.forEach(cartItem => {
        if(cartItem.item == product.SKU){
          originalPrice = originalPrice + cartItem.quantity * product.Price;
        }
      })
    });
    cart.forEach(cartItem => {
      discountPrice = discountPrice + cartItem.price;
    })
    console.log("Original Price: $", originalPrice);
    console.log("Discount Price: $", discountPrice);
  }
}