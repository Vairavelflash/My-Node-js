const express = require('express');
const mysql = require('mysql');

const app = express();

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Vairavel487#",
    database: "mysqldb",
    port: "3306"
});

var insert_R = 'INSERT INTO details(name,age) VALUE(?,?)';
connection.connect((err) => {
  //Inserting a record into details
  connection.query(insert_R,['rejii',24], function(err,res){
    if(err) throw err;
    else {
        console.log('Details added successfully');
    }
  });

})

const port = process.env.PORT || 5000;
app.listen(port);
console.log("app is listening on " + port);