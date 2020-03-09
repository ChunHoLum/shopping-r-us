const Table = require('cli-table3');
const { getProductItems } = require('../_db/products.db');

module.exports = {
  displayProducts: () =>{
    // instantiate the table object
    const table = new Table({
      head: ['SKU', 'Name', 'Price']
    });

    const productitems = getProductItems();
    productitems.forEach(item => {
      table.push([item.SKU, item.Name, item.Price])
    });

    console.log( table.toString());
  }

}

