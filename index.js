#!/usr/bin/env node
const clear = require('clear');
const mainMenu = require('./main-menu/main-menu');

const main = async () => {
  clear();
  mainMenu.displayMainMenu();
};

main();
