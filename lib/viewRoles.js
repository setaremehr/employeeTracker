//const mysql = require('mysql');
//const optionEm = require('../index');
const {connection,query} = require('../config/connection');

async function viewRoles(){
    // let res =await query("SELECT roles.*, departments.name FROM roles LEFT JOIN departments ON departments.id = roles.department_id", function (err,res){
        try{
        let res = await query(`SELECT 
                                r.id AS 'role_id',
                                r.title AS 'role_title',
                                r.salary AS 'role_salary',
                            r.department_id,
                            d.name AS 'department_name'    
                            FROM
                                roles r
                            LEFT JOIN
                            departments d ON d.id = r.department_id;`);
        console.table(res);
        } catch(err){
        
        console.log(err);
        }  
}
module.exports = viewRoles;