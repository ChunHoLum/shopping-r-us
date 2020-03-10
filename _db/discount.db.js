const { X_FOR_Y_DEAL_DISCOUNT, BULK_DISCOUNT, BUNDLE_DISCOUNT} = require('./discountType.db');
const { getProductItems } = require('../_db/products.db');

module.exports = {
  getDiscountList: () =>{
    return discountList;
  },
  getActiveDiscountList: () =>{
    activeDiscountList = [];
    discountList.forEach(discount => {
      if(discount.active){
        activeDiscountList.push(discount);
      }
    })
    return activeDiscountList;
  },
  updateDiscount: (item, newPrice) => {
    productitems.forEach(product => {
      if (product.SKU == item){
        product.Price = newPrice;
        console.log("Updated item")
      }
    })
  },
  xForYDealDiscountRule: (sku, buyItemQuantity, payItemQuantity, cart) => {

    if (payItemQuantity == 0 || payItemQuantity > buyItemQuantity ) return;

    try{
      const targetSkuCount = cart.filter(cartItem => cartItem.item == sku)[0].quantity;
      const productItem = getProductItems().filter(product => product.SKU == sku);
      const sets = Math.floor(targetSkuCount/buyItemQuantity);
      const freeItemQuantity = (buyItemQuantity - payItemQuantity) * sets

      cart.forEach(cartItem => {
        if(cartItem.item == sku) {
          cartItem.price = cartItem.price - productItem[0].Price * freeItemQuantity;
        };
      })
    } catch (err){
      // console.log("xForYDealDiscountRule not applicable")
    }

  }, 
  bulkDiscountRule: (sku, buyItemQuantity, newDropPrice, cart) => {

    try{
      const targetSkuCount = cart.filter(cartItem => cartItem.item == sku)[0].quantity;
      if ( targetSkuCount > buyItemQuantity ){
        cart.forEach(cartItem => {
          if(cartItem.item == sku) {
            cartItem.price = targetSkuCount * newDropPrice;
          };
        })
      }
    } catch (err){
      // console.log("bulkDiscountRule not applicable")
    }
  },
  bundleDiscountRule: (buySKU, freeSKU, buyItemQuantity, freeItemQuantity, cart) => {
    try{
      const buySkuCount = cart.filter(cartItem => cartItem.item == buySKU)[0].quantity;
      const freeSkuCount = cart.filter(cartItem => cartItem.item == freeSKU)[0].quantity;
      const productItem = getProductItems().filter(product => product.SKU == freeSKU);

      const sets = buySkuCount / buyItemQuantity;
      let freeSets = sets * freeItemQuantity;

      if (freeSets > freeSkuCount) freeSets = freeSkuCount;

      cart.forEach(cartItem => {
        if(cartItem.item == freeSKU) {
          cartItem.price = cartItem.price - productItem[0].Price * freeSets
        };
      })
      
    } catch (err) {
      // console.log("bundleDiscountRule not applicable")
    }
  }
};

let discountList = [
  {
    "discountID:": 1,
    "discountName": "Buy 3 for 2 deal on Apple TVs",
    "discountType": X_FOR_Y_DEAL_DISCOUNT,
    "SKU": "atv",
    "buyItemQuantity": 3,
    "payItemQuantity": 2,
    "active": true
  },
  {
    "discountID:": 2,
    "discountName": "The price of Super iPad drop to $499.99 each when buy more than 4",
    "discountType": BULK_DISCOUNT,
    "SKU": "ipd",
    "buyItemQuantity": 4,
    "newDropPrice": 499.99,
    "active": true
  },
  {
    "discountID:": 3,
    "discountName": "VGA adapter free of charge with every MacBook Pro sold",
    "discountType": BUNDLE_DISCOUNT,
    "buySKU": "mbp",
    "freeSKU": "vga",
    "buyItemQuantity": 1,
    "freeItemQuantity": 1,
    "active": true
  },

]
