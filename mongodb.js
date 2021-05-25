//create-db.js
var MongoClient = require('mongodb').MongoClient;
var new_db = "mongodb://localhost:27017/newdb";

MongoClient.connect(new_db, (error, db) => {
    if (error) {
        throw error;
    }
    var dbo = db.db("mynewdb");
    dbo.collection("Avengers");
    console.log("Database demo_db created successfully");
    //To close the connection
    db.close();
});