const mysql = require('mysql');
const optionEm = require('./option');
const connection = require('./config/connection');

function viewEmployee() {
   
    connection.query('SELECT employee.first_name, employee.last_name, roles.title AS \"role\" FROM employees LEFT JOIN roles ON employees.role_id = roles.id LEFT JOIN employees',
    (err,res) => {
    if (err) throw err;
    console.table(res);
    optionEm();
    });
}
