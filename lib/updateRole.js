const optionEm = require('../index');
const connection = require('../config/connection');

function updateRole() {
    connection.query("SELECT first_name, last_name, id FROM employees",
        (err, res) => {
            let employees = res.map(employee => ({ name: employee.first_name + " " + employee.last_name, value: employee.id }))

            inquirer
                .prompt([
                    {
                        type: "list",
                        name: "employeeName",
                        message: "Which employee's role would you like to update?",
                        choices: employees
                    },
                    {
                        type: "input",
                        name: 'role',
                        message: 'Which role would you like them to have?',
                    }
                ]).then(res => {
                    connection.query(`UPDATE employees SET role_id = ${res.role} WHERE id = ${res.employeeName}`,
                        (res, _err) => {
                            console.log(res);
                            optionEm();
                        }
                    );
                })
                }
                )
        }

module.exports =  updateRole;       