#!/usr/bin/env node
const inquirer = require('inquirer');

module.exports = {
  requestCredentials: () => {
    const questions = [
      {
        name: 'username',
        type: 'input',
        message: 'Please enter your username: (manager)',
        validate: function( value ) {
          if (value.length && value === "manager") {
            return true;
          } else {
            return 'Please enter your username: (manager)';
          }
        }
      },
      {
        name: 'password',
        type: 'password',
        message: 'Please enter your password: (manager)',
        validate: function(value) {
          if (value.length && value === "manager") {
            return true;
          } else {
            return 'Please enter your password: (manager)';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },
};