// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project: (Required)',
            validate: descriptionInput => {
                if(descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter the project description!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'contentTable',
            message: 'What sections does your README file include?',
            choices: ['Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use:'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What type of license does your project have?',
            choices: ['MIT License', 'GNU GPLv3', 'Apache License 2.0']

        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Please provide guidelines on how to contribute to your project:'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are test cases for your application and how can we run them?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username:'
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your email address"
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
