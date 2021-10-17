// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const utils = require("util");


const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
const questions = [
    
    {
        type: 'input',
        name: 'Username',
        message: 'What is your GitHub user name?',
        validate: function (data) {
            if (data.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'Title',
        message: 'What is the Title of your project?',
        validate: function (data) {
            if (data.length < 1) {
                return console.log("Please enter a valid GitHub repository Title.");
            }
            return true;
        }
    },
    {
        type: 'input', 
        name: 'Title',
        message: 'What is the title of your project?',
        validate: function (data) {
            if (data.length < 1) {
                return console.log("Please enter a Title for your project.");
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'Description',
        message: "Provide a detailed description of your project.",
        validate: function (data) {
            if (data.length < 1) {
                return console.log("Please provide a description of your project.");
            }
            return true;}
    },

    {
        type: 'input',
        name: 'Table of Contents.',
        message: "A Table of Contents template has been provided for you, add and delete contents as needed after your README has been generated."
    },
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: "Do you need to install any dependencies to run this app?",
        default: true
    },
    {
        type: 'checkbox',
        name: 'Installation',
        message: 'Which dependencies do you need to install?',
        choices : [
            "lodash",
            "ora",
            "inquirer",
            "chalk",
            "fs",
            "other-enter dependency after README is generated",
            ],
         when: ({ confirmInstallation }) => {
          if (confirmInstallation) {
            return true;
          } else {
            return false;
          }
        }
      },
    {
        type: "checkbox",
        name: "License",
        message: "Please select which license you would like to use.",
        choices : [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None",
            "GNU Lesser General Public v2.1",
            "Mozilla Public 2.0",
        ],
    },
    {
        type: 'input',
        name: 'Usage',
        message: "What do I need to type in the terminal for this to run?"
    },
    {
        type: 'confirm',
        name: 'confirmScreenshot',
        message: "Would you like to add a screenshot?",
        default: true
    },
    {
        type: 'input',
        name: 'Screenshot',
        message: 'Add a link to your screenshot.',
        when: ({ confirmScreenshot }) => {
          if (confirmScreenshot) {
            return true;
          } else {
            return false;
          }
        }
      },
    {
        type: 'confirm',
        name: 'confirmCredits',
        message: "Did anyone else contribute to the completion of this project?",
        default: true
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Who would you like to recognize for helping with this project?.',
        when: ({ confirmCredits }) => {
          if (confirmCredits) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'How should people contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('You need to provide information on how to contribute to the project!');
                return false;
            }
        }
    },
    {
        type: "input",
        message: "Please enter your E-mail address.",
        name: "Email",
        validate: function (data) {
            if (data.length < 1) {
                return console.log("Please enter a valid email address.");
            }
            return true;
    },
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(error) {
        console.log(fileName)
        console.log(data)
        if (error) {
            return console.log(error)
        } else {
            console.log("Success! Your README.md has been generated")
        }
    })

}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}
// Function call to initialize app
init();

init();
