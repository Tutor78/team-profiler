// classes for use in inquirer
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// node packages needed for functionality
const inquirer = require('inquirer');

// function to write the final html file to the dist folder
const createHtmlFile = require('../utils/generateHtml');

// array to hold all of the employees information
const employeeArr = [];

// the function that allows the adding of multiple employees when finished it runs the function that writes the file to the dist folder
function addEmployee() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add an employee profile?',
            default: true
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of this employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter a name!');
                    return false;
                }
            },
            when: ({ addEmployee }) => {
                if (addEmployee) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(response => {
        // if the user chooses to not add another employee it creates the html file based on the employee array
        if (!response.addEmployee) {
            createHtmlFile(employeeArr);
        } else {
            // if the user chooses to add another employee it asks questions so that a new object can be added to the employee array
            questionHandler(response.name);
        }
    })
};

// after the user decides to add another employee this takes the name and makes the questions more directed by using the name
// when it finishes it adds all the information for the employee to an array that will be used to create html cards
function questionHandler(name) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: `What is ${name}'s role?`,
            choices: ['Manager', 'Engineer', 'Intern'],
            default: 'Manager'
        },
        {
            type: 'input',
            name: 'id',
            message: `What is ${name}'s id number?`,
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('You must enter an id number!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is ${name}'s email?`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('You must enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is ${name}'s office number?`,
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('You must enter an office number!');
                    return false;
                }
            },
            when: ({ role }) => {
                if (role === 'Manager') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: `What is ${name}'s GitHub username?`,
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('You must enter a valid GitHub username!');
                    return false;
                }
            },
            when: ({ role }) => {
                if (role === 'Engineer') {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: `What school does ${name} attend?`,
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('You must enter a valid school!');
                    return false;
                }
            },
            when: ({ role }) => {
                if (role === 'Intern') {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]).then(response => {
        if (response.role === 'Manager') {
            // creates a new manager obect if the role is manager
            const manager = new Manager(name, response.id, response.email, response.officeNumber);

            // pushes the manager object to an employee array to be used later
            employeeArr.push(manager);

            // reruns the addEmployee function when finished
            addEmployee();
        } else if (response.role === 'Engineer') {
            // creates a new engineer object if the role is engineer
            const engineer = new Engineer(name, response.id, response.email, response.github);

            // pushes the engineer object to an employee array for use later
            employeeArr.push(engineer);

            // reruns the addEmployee function when finished
            addEmployee();
        } else if (response.role === 'Intern') {
            // creates a new intern object if the role is intern
            const intern = new Intern(name, response.id, response.email, response.school);

            // pushes the intern object to an employee array for use later
            employeeArr.push(intern);

            // reruns the addEmployee function when finished
            addEmployee();
        }
    })
};

module.exports = addEmployee;