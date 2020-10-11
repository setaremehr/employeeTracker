const { connection, query } = require("../config/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");

async function addDepartment() {
    try{
        let res = await query('SELECT * FROM departments');
  
        console.log(res);
          }
      catch(err){
        console.log(err);  }

        let addDepartmentQuestions = [
            {
                type: "input",
                name: "name", 
                message: "What Department would you like to add?"
            }
        ];
        
        let addOneAnswer = await inquirer.prompt(addDepartmentQuestions);
        
        // console.log('i am here');

        let queryDep = await query (
            `INSERT INTO departments (name)
            VALUES 
            ('${addOneAnswer.name}');`
        );
        console.log('\n Added new department\n');
}
module.exports = addDepartment;