// classes for use in inquirer
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// node packages needed for functionality
const fs = require('fs');
const inquirer = require('inquirer');

function initializeQuestion() {
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
        if (!response.addEmployee) {
            console.log('Thank you goodbye!');
        } else {
            questionHandler(response.name);
        }
    })
};

function questionHandler(name) {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: `What is ${name}'s role?`,
            choices: ['Manager', 'Engineer', 'Employee', 'Intern'],
            default: 'Employee'
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
        if (response.role === 'Employee') {
            const employee = new Employee(name, response.id, response.email);

            console.log(employee);
        } else if (response.role === 'Manager') {
            const manager = new Manager(name, response.id, response.email, response.officeNumber);

            console.log(manager);
        } else if (response.role === 'Engineer') {
            const engineer = new Engineer(name, response.id, response.email, response.github);

            console.log(engineer);
        } else if (response.role === 'Intern') {
            const intern = new Intern(name, response.id, response.email, response.school);

            console.log(intern);
        }
    })
};

initializeQuestion();