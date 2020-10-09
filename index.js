const mysql = require('mysql');
const inquirer = require('inquirer');

const viewEmployee = require('./lib/viewEmployee');
const viewDepartment = require('./lib/viewDepartment');
const viewRoles = require('./lib/viewRoles');
const addEmployee = require('./lib/addEmployee');
const addRoles = require('./lib/addRoles');
const updateRole = require('./lib/updateRole');

// const connection = require('./config/connection');
// console.log('\n Welcome to employye tracker\n');
// optionEm();

process.on('exit', () =>{
    console.log('\n Thanks for using "Employee Tracker" Application\n');
});

let continueAsking = true;

 async function optionEm(){
    while(continueAsking){

    
    const mainQuestions = await  inquirer.prompt([
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
        ]);
        //console.log(mainQuestions);
        // .then( res => {
            switch (mainQuestions.option) {
                case 'View all Employees':
                   await viewEmployee(); // Done!
                    break;

                case 'View all Departments':
                    await viewDepartment(); // Done!
                    break;

                case 'View all Roles':
                   await viewRoles(); // Done!              
                    break;

             case 'Add Employee': // Done!
                   await addEmployee();
                    break;

                case 'Add Roles':
                   await addRoles();
                    break;

                case 'Add Department':
                    addDepartment();
                    break;

                case 'Update Employee Role':
                    updateRole();
                    break;

                case 'Remove Employee':
                    //removeEmployee();
                    break;

                case 'Exit':
                    //connection.end();
                    continueAsking = false;
                    process.exit(0);
                    //break;
            }
         const continueQuestion = await inquirer.prompt([
             {
                 type:'confirm',
                 message: "Would you like to continue? ",
                 name:'userContinue'
             }
         ]);
         if(!continueQuestion.userContinue){
            continueAsking=false;
            process.exit(0);
         }
        }   
}
optionEm();
module.exports = optionEm;





















// function addDepartment(){

// }



// function   removeEmployee(){

// }