// const mysql = require('mysql');
// const optionEm = require('../index');
const {connection,query}  = require('../config/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

async function addRoles() {
    try{
      let res = await query('SELECT * FROM departments');

      console.log(res);
        }
    catch(err){
      console.log(err);  }
  
    //question Array
    let addDepartmentQuestions = [
                    // 0
                      {
                          type: 'input',
                          name: 'title',
                          message: 'What is the role you wish to add?'
                      },
                    // 1
                      {
                          type: 'input',
                          name: 'salary',
                          message: 'What is the salary of the role?',
                      },
                    // 2
                      {
                          type: 'list',
                          name: 'role_department',
                          message: 'What department does the role belong too?',
                          choices: ['HR','sales','Engineering','Finance','Legal']
                      }
                    ];
  
  // Add department Name to the list above. Note index 2 
//   for(const dept of rest){
//     addDepartmentQuestions[2].choices.push(dept.name);
//   }
  
  // Answers
  let addDepartmentAnswers = await inquirer.prompt(addDepartmentQuestions);
  
  await query(
    'INSERT INTO roles SET ?',
    {
        title: addDepartmentAnswers.title,
        salary: addDepartmentAnswers.salary,
        department_id: addDepartmentAnswers.role_department
    });
  console.table(addDepartmentAnswers);
  console.log('\n Added new role \n');
  
  }
  module.exports = addRoles;