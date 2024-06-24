const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');
const fs = require('fs');

async function userPrompt() {
  try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        message: 'Enter Up To Three Characters',
        name: 'text',
        validate: input => input.length <= 3 || 'Input must be 3 characters or fewer.'
      },
      {
        type: 'input',
        message: 'Text Color: Enter a color keyword (OR a hexadecimal number):',
        name: 'textColor'
      },
      {
        type: 'input',
        message: 'Shape Color: Enter a color keyword (OR a hexadecimal number):',
        name: 'shapeColor'
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape',
        choices: ['Triangle', 'Circle', 'Square']
      }
    ]);

    // Validate input length
    if (answers.text.length > 3) {
      console.log('Input must be 3 characters or fewer.');
      return userPrompt(); // Restart prompt if input is invalid
    }

    let shape;
    switch (answers.shape) {
      case 'Triangle':
        shape = new Triangle();
        break;
      case 'Circle':
        shape = new Circle();
        break;
      case 'Square':
        shape = new Square();
        break;
      default:
        console.log('Invalid shape choice.');
        return; // Exit function if shape is invalid
    }

    shape.setColor(answers.shapeColor);

    const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="175" font-size="40" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
      </svg>
    `;

    fs.writeFileSync('examples/logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error);
  }
}

userPrompt();
