#!/usr/bin/env node
// Requiring dependencies
const clear = require('clear');
// Customize import function
const mainMenu = require('./main-menu/main-menu');
// Main function of the program
const main = async () => {
  clear();
  mainMenu.displayMainMenu();
};
// Starting point
main();
