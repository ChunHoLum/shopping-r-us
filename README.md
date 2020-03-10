# shopping-r-us
Flexible checkout system with simple interactive command-line menu.
The sysyem is written in JavaScript and used Node.Js as the run-time environment.

## Installation
```
git clone https://github.com/ChunHoLum/shopping-r-us.git
cd shopping-r-us
npm install
```
## Special Features
**Update Product Price** <br>
Users can update the product prices by input item number and new price with a space. <br>
For example ( update Super Ipad to $550" ) :
```
>> 1 550 
```
![Image](https://github.com/ChunHoLum/shopping-r-us/blob/master/screenshots/updateprodcuts.png)	

__Update Discount__ <br>
Users can update the discount element by input element number and new value. <br>
For example ( update Discount Name to "New Discount Name" ) :
```
>> 2 "New Discount Name" 
```
![Image](https://github.com/ChunHoLum/shopping-r-us/blob/master/screenshots/updatediscount2.png)	

## Remarks
For demo purpose, all the products item and discount setting will restore after program terminated.
