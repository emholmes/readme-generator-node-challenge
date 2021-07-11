// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "username", 
    message: "What is your GitHub username."
  }, 
  {
    type: "input",
    name: "email", 
    message: "What is your email address."
  }, 
  {
    type: "input",
    name: "title", 
    message: "What is the title of your project."
  }, 
  {
    type: "input",
    name: "description", 
    message: "Provide a brief project description."
    
  }, 
  {
    type: "list",
    name: "license", 
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "Boost 1.0", "CCO", "Eclipse", "Perl", "GPL 3.0", "BSD 3", "None"]
  }, 
  {
    type: "input",
    name: "installation", 
    message: "What command is used to install dependencies?",
    default: "npm install"
  }, 
  {
    type: "input",
    name: "tests", 
    message: "What command is used to run tests?",
    default: "npm run test"
  },
  {
    type: "input",
    name: "usage", 
    message: "What does a user need to about using the repo?"
  }, 
  {
    type: "input",
    name: "contributing", 
    message: "What does a user need to know about contributing to the repo?"
  }
];


// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, err => {
    if (err) throw err;

    console.log("README complete!");
  });
}

// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions);  
}

// Function call to initialize app
init()
  .then(answers => {
    const readmeMarkup = generateMarkdown(answers);
    writeToFile("./README.md", readmeMarkup);
  });
