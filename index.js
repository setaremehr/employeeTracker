const mysql = require('mysql');
const inquirer = require('inquirer');

const viewEmployee = require('./lib/viewEmployee');
const viewDepartment = require('./lib/viewDepartment');
const viewRoles = require('./lib/viewRoles');
const addEmployee = require('./lib/addEmployee');
const addRoles = require('./lib/addRoles');
const addDepartment = require('./lib/addDepartment');

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
                    'Exit'
                ]
            }
        ]);
        //console.log(mainQuestions);
        // .then( res => {
            switch (mainQuestions.option) {
                case 'View all Employees':
                   await viewEmployee(); 
                    break;

                case 'View all Departments':
                    await viewDepartment(); 
                    break;

                case 'View all Roles':
                   await viewRoles();               
                    break;

             case 'Add Employee': 
                   await addEmployee();
                    break;

                case 'Add Roles':
                   await addRoles();
                    break;

                case 'Add Department':
                   await addDepartment();
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