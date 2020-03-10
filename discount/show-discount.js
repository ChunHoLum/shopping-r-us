#!/usr/bin/env node
// Requiring dependencies
const Table = require('cli-table3');
// Customize import function
const { getDiscountList } = require('../_db/discount.db');
// Exporting the functions
module.exports = {
  displayDiscountList: () =>{
    // Get the discount list
    const discountList = getDiscountList();
    // For each discount event, push to a new table
    discountList.forEach(discount => {
      // Instantiate the table object
      const table = new Table();
      entries = Object.entries(discount);
      for( const [key, value] of entries ){
        let obj = {};
        obj[key] = value;
        table.push(obj);
      }
      // Display table form
      console.log( table.toString());
    })
  }
}

