module.exports = {
  getProductItems: () =>{
    return productitems;
  },
  updateProductItems: (item, newPrice) => {
    productitems.forEach(product => {
      if (product.SKU == item){
        product.Price = newPrice;
        console.log("Updated item")
      }
    })
  }
};

let productitems = [
  {
    "SKU": "ipd",
    "Name": "Super Ipad",
    "Price": 549.99
  },
  {
    "SKU": "mbp",
    "Name": "MacBook Pro",
    "Price": 1399.99
  },
  {
    "SKU": "atv",
    "Name": "Apple TV",
    "Price": 109.50
  },
  {
    "SKU": "vga",
    "Name": "VGA adapter",
    "Price": 30.00
  }
]