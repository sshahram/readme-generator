// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
// TODO: Create a function to initialize app
const init = () => {
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
            choices: [{name: 'Description', checked: true}, 
            {name: 'Table of Contents', checked: false}, 
            {name: 'Installation', checked: false}, 
            {name: 'Usage', checked: true}, 
            {name: 'License', checked: false}, 
            {name: 'Contributing', checked: false}, 
            {name: 'Tests', checked: false}, 
            {name: 'Questions', checked: false}
        ]
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions:',
            when: ({contentTable}) => {
                if(contentTable.indexOf('Installation') > -1) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples on how to use your application: (Required)',
            validate: usageInput => {
                if(usageInput) {
                    return true;
                } else {
                    console.log('Please provide instructions and examples on how to use your application!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'What type of license does your project have?',
            choices: ['MIT', 'GNU', 'Apache'],
            when: ({contentTable}) => {
                if(contentTable.indexOf('License') > -1) {
                    return true;
                } else {
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Please provide guidelines on how to contribute to your project:',
            when: ({contentTable}) => {
                if(contentTable.indexOf('Contributing') > -1) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are test cases for your application and how can we run them?',
            when: ({contentTable}) => {
                if(contentTable.indexOf('Tests') > -1) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username: (Required)',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your email address",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        }
    ])
};

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/sample-readme.md', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


// Function call to initialize app
init();
