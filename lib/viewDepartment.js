const cTable = require('console.table');
const {query} = require('../config/connection');

 async function viewDepartment(){   
     let res =await query("SELECT * FROM departments") ; 
     console.table(res) ;
}

module.exports = viewDepartment;