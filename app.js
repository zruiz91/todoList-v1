
const express = require('express');

const bodyParser = require('body-parser');

const app = express();




app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/index.html');

    let today = new Date();

    let currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0) {
        res.write("<h1>Weekend</h1>");
    } else {
        res.sendFile(__dirname + '/index.html');
    }
});

app.listen(process.env.PORT || 3000, function () {
    console.log('listening on 3000.');

});