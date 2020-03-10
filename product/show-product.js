#!/usr/bin/env node
// Requiring dependencies
const Table = require('cli-table3');
// Customize import function
const { getProductItems } = require('../_db/products.db');
// Exporting the functions
module.exports = {
  displayProducts: () =>{
    // Instantiate the table object
    const table = new Table({
      head: ['SKU', 'Name', 'Price']
    });
    // Push the product items into table row
    const productItems = getProductItems();
    productItems.forEach(item => {
      table.push([item.SKU, item.Name, item.Price])
    });
    // Display table form
    console.log( table.toString());
  }
}

