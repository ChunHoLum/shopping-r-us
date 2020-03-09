const Table = require('cli-table3');

module.exports = {
  displayCart: () => {
    const table = new Table({
      head: ['Item', 'Quantity']
    });
    cart.forEach(cartItem => {
      table.push([cartItem["item"], cartItem["quantity"]])
    });
    console.log( table.toString());
  },
  updateCart: (item) => {
    let addToCart = false;
    cart.forEach(cartItem =>{
      if(cartItem["item"] == item){
        cartItem["quantity"] += 1;
        addToCart = true;
      }
    })
    if (!addToCart) {
      cart.push({
        "item": item, 
        "quantity": 1
      });
    }
    
  }
};

let cart = []