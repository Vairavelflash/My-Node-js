var express = require('express');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var crypto = require('crypto');

var app = express();
//enter the name of the database in the end 
var new_db = "mongodb://localhost:27017/";

app.get('/', function(req, res) {
    res.set({
        'Access-Control-Allow-Origin': '*'
    });
    return res.redirect('/public/index.html');
}).listen(3000);
console.log("Server listening at : 3000");
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));



// Sign-up function starts here. . .
app.post('/sign_up', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var phone = req.body.phone;
    // var password = getHash(pass, phone);


    var data = {
        "name": name,
        "email": email,
        "password": password,
        "phone": phone
    }

    MongoClient.connect(new_db, function(error, db) {
        if (error) {
            throw error;
        }
        console.log("connected to database successfully");
        var dbo = db.db("test_signup");

        //CREATING A COLLECTION IN MONGODB USING NODE.JS
        dbo.collection("details").insertOne(data, function(err, res) {

            if (err) throw err;
            console.log("Record inserted successfully");
            console.log(collection);
        });
    });

    console.log("DATA is " + JSON.stringify(data));
    res.set({
        'Access-Control-Allow-Origin': '*'
    });
    return res.redirect('/public/success.html');

});