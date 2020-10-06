const mysql = require('mysql');
const inquirer = require('inquirer');
const connection = require('./config/connection');

let optionEm = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'option',
                choices: [
                    'View all Employees',
                    'View all Departments',
                    'View all Roles',
                    'Add Employee',
                    'Add Roles',
                    'Add Department',
                    'Update Employee Role',
                    'Remove Employee',
                    'Exit'
                ]
            }
        ]).then( res => {
            switch (res.runStart) {

                case 'View all Employees':
                    viewEmployee();
                    break;

                case 'View all Departments':
                    viewDepartment();
                    break;

                case 'View all Roles':
                    viewRoles();
                    break;

                case 'Add Employee':
                    addEmployee();
                    break;

                case 'Add Roles':
                    addRoles();
                    break;

                case 'Add Department':
                    addDepartment();
                    break;

                case 'Update Employee Role':
                    updateRole();
                    break;

                case 'Remove Employee':
                    removeEmployee();
                    break;

                case 'Exit':
                    connection.end();
                    break;
            }
        })
        // console.log(option);
        
}

module.exports = optionEm;