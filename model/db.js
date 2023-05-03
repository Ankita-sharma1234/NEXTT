const mysql = require('mysql')

const connection= mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"",
    database:"tnplab"
})

connection.connect((err)=>{
    if(err){
        console.log(err.sqlMessage)
    }
    console.log("database connection")
})
module.exports={connection}