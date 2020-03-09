#!/usr/bin/env node
const chalk = require('chalk');
const figlet = require('figlet');
// const login  = require('./login/login');
const clear = require('clear');

const mainMenu = require('./main-menu/main-menu');

clear();

// console.log(
//   chalk.white(
//     figlet.textSync('Shopping R US', { horizontalLayout: 'full' })
//   )
// );

const main = async () => {
  // console.log("Please login to continue")
  // const credentials = await login.requestCredentials();
  mainMenu.displayMainMenu();
};

main();
