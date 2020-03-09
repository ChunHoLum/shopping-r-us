const { X_FOR_Y_DEAL_DISCOUNT, BULK_DISCOUNT, BUNDLE_DISCOUNT} = require('./discountType.db');

module.exports = {
  getDiscountList: () =>{
    return discountList;
  },
  
  updateDiscount: (item, newPrice) => {
    productitems.forEach(product => {
      if (product.SKU == item){
        product.Price = newPrice;
        console.log("Updated item")
      }
    })
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
  },
  {
    "discountID:": 2,
    "discountName": "The price of Super iPad drop to $499.99 each when buy more than 4",
    "discountType": BULK_DISCOUNT,
    "SKU": "ipd",
    "buyItemQuantity": 4,
    "newDropPrice": 499.99,
  },
  {
    "discountID:": 3,
    "discountName": "VGA adapter free of charge with every MacBook Pro sold",
    "discountType": BUNDLE_DISCOUNT,
    "soldSKU": "mbp",
    "freeSKU": "vga",
    "buyItemQuantity": 1,
    "freeItemQuantity": 1,
  },

]
