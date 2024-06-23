const inquirer = require('inquirer');
const colors = require('colors');
const fs = requrie('fs')
const { Circle, Triangle, Square } = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter Up To Three Characters',      
      name: 'text',
      
    },
    {
      type: 'input',
      message: 'Enter Color:Enter a color keyword (OR a hexadecimal number):',
      name: 'color',
    },
    {
      type: 'input',
      message: 'Choose shape color: enter a color keyword (OR a hexadecimal number)',
      name: 'shape',
    },

    {
      type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like?",
        choices: ["Triangle", "Circle", "Square"],
    },

  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log(colors.green('Success!'))
      : console.log(colors.red('You forgot your password already?!'))
  );
