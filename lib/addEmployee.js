const { connection, query } = require("../config/connection");
const inquirer = require("inquirer");
const cTable = require("console.table");

async function addEmployee() {
  let addEmployeeQuestions = [
    {
      type: "input",
      message: "Enter the first name?",
      name: "first_name",
    },
    {
      type: "input",
      message: "Enter the last name?",
      name: "last_name",
    },
    {
      type: "list",
      message: "What is the employee's role_id?",
      name: "role_id",
      choices: [1, 2, 3, 4, 6, 7, 8],
    },
  ];
  let res = await inquirer.prompt(addEmployeeQuestions);
  console.log(res);

  let queryResult = await query(
    `INSERT INTO employees 
            (first_name, last_name, role_id) 
            VALUES ('${res.first_name}' , '${res.last_name}', ${res.role_id});`
  );

// console.log(queryResult);
  console.log("\n Added new employee \n");
}
module.exports = addEmployee;
