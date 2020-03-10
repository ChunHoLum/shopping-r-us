# shopping-r-us
Flexible checkout system with simple interactive command-line menu.
The sysyem is written in JavaScript and used Node.Js as the run-time environment.

## Installation
```
git clone https://github.com/ChunHoLum/shopping-r-us.git
cd shopping-r-us
npm install
```
## Example scenarios
**Scenarios 1** 
```
SKUs Scanned: atv, atv, atv, vga
Total expected: $249.00 
```
**Result:** <br>
![Image](https://github.com/ChunHoLum/shopping-r-us/blob/master/screenshots/testcase1.PNG)	<br>
**Scenarios 2** <br>
```
SKUs Scanned: atv, ipd, ipd, atv, ipd, ipd, ipd
Total expected: $2718.95
```
**Result:**<br>
![Image](https://github.com/ChunHoLum/shopping-r-us/blob/master/screenshots/testcase2.PNG)	<br>
**Scenarios 3** <br>
```
SKUs Scanned: mbp, vga, ipd
Total expected: $1949.98 
```
**Result:**<br>
![Image](https://github.com/ChunHoLum/shopping-r-us/blob/master/screenshots/testcase3.PNG)	<br>
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
