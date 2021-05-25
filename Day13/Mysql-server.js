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

var table = "CREATE TABLE details (id int(15) NOT NULL AUTO_INCREMENT," +
    "name varchar(30) DEFAULT NULL," +
    "age float(15) DEFAULT NULL," +
    "PRIMARY KEY (id)) ENGINE=InnoDB DEFAULT CHARSET=latin1";

connection.connect((err) => {
    connection.query(table, function(err) {
        if (err) throw err;
        else {
            console.log('Table created Successfully!');
        }
    });

})

const port = process.env.PORT || 5000;
app.listen(port);
console.log("app is listening on " + port);