const express = require('express');
const multer = require('multer');
const upload = multer({
    dest: 'uploads/' //this saves your file into a directory called "uploads"
});
const app = express();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');

});
// It's very crucial that the file name matches the name attribute in your html
app.post('/', upload.single('single'), (req, res) => {
    res.sendFile(__dirname + '/success.html');
});

app.listen(3000, () => {
    console.log('Server is listening at 3000');
});