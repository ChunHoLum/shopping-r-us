const Table = require('cli-table3');
const { getProductItems } = require('../_db/products.db');

module.exports = {
  getCart: () => {
    return cart;
  },
  displayCart: () => {
    const table = new Table({
      head: ['Item', 'Quantity', 'Price']
    });
    cart.forEach(cartItem => {
      table.push([cartItem.item, cartItem.quantity, '$'+cartItem.price])
    });
    console.log( table.toString());
  },
  addToCart: (item) => {
    let addToCart = false;

    const productItem = getProductItems().filter(product => product.SKU == item);
    cart.forEach(cartItem =>{
      if(cartItem.item == item ){
        cartItem.quantity += 1;
        cartItem.price = productItem[0].Price * cartItem.quantity
        addToCart = true;
      }
    })
    if (!addToCart) {
      cart.push({
        "item": item, 
        "quantity": 1,
        "price": productItem[0].Price
      });
    }
  },
  clearCart: () => {
    cart = [];
  }
};

let cart = []