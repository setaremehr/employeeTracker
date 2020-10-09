const {connection,query} = require('../config/connection');

async function viewEmployee() {
    try {
        let res = await query(`select * from employees;`);   
    console.table(res);                            
    } catch (err){
        console.log(err);
}
}
module.exports = viewEmployee;
