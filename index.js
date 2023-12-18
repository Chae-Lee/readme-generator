/* 
user inputs 'node index.js' into the terminal 
Prompts to ask user: 
  1) What is your GitHub username? 
  2) What is your email address? 
  3) What is your project's name? 
  4) Please write a short description of your project
  5) Select License (list of options)
  6) What command should be run to install dependencies? (npm i = should be the default)
  7) What command should be run to run tests? (npm test = should be the default)
  8) What does the user need to know about using the repo? 
  9) What does the use need to know about contributing to the repo? 
- Once all the questions are answered, README file is generated as a separate file 
- README file displays with the relevant stylings/paragraphs
- Add in functionality for the github username links to the actual github page 
- Add in functionality for the Contents pages to be responsive to user's selection and taken to corresponding section 
- Questions section " If you have any questions about the repo, open an issue or contact me directly at (email). You can find more of my work at (github - link)"

*/

const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// Questions for users to answer to provide details on the README - displayed in the Integrated Terminal 
const questions = [
  {
    type: 'input',
    name:'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name:'email',
    message: 'What is your email address?',
  },
  {
    type:'input',
    name:'title',
    message:'What is the name of the project?',
  },
  {
    type:'input',
    name:'description',
    message:'Please write a short description of your project',
  },
  {
    type: 'list',
    name: 'license',
    message:'Select License (list of options)',
    choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'dependencies',
    message: 'What command should be run to install dependencies?',
    default: 'npm i'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'What does the user need to know about using the repo?',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What does the use need to know about contributing to the repo?',
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile (fileName, data, (err) => {
    console.log ('testing');
  });
}

// function to initialize program
function init() {
  inquirer.prompt (questions).then((answers) => {
    console.log (answers);
    console.log ('Generating a README...');
    writeToFile (`README.md`, generateMarkdown(answers));
  })
}

// function call to initialize program
init();


// JSON.stringify(answers, null, '\t')
