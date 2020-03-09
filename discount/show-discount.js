const Table = require('cli-table3');
const { getDiscountList } = require('../_db/discount.db');

module.exports = {
  displayDiscountList: () =>{

    const discountList = getDiscountList();

    discountList.forEach(discount => {
      const table = new Table();
      entries = Object.entries(discount);
      for( const [key, value] of entries ){
        let obj = {};
        obj[key] = value;
        table.push(obj);
      }
      console.log( table.toString());
    })
  }
}

