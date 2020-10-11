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
    let addRoleQuestions = [
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
                          name: 'department_id',
                          message: 'What department does the role belong too?',
                          choices: [1,2,3,4,5],
                      }
                    ];
  
  // Answers
  let addDepartmentAnswers = await inquirer.prompt(addRoleQuestions);

  
  let queryResultt =  await query (
    `INSERT INTO roles 
    (title, salary, department_id)
    VALUES
  ('${addDepartmentAnswers.title}', ${addDepartmentAnswers.salary}, ${addDepartmentAnswers.department_id});`
  );
    
  // console.table(addDepartmentAnswers);
  console.log('\n Added new role \n');
  
  }
  module.exports = addRoles;