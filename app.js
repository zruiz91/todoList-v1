
const express = require('express');

const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/index.html');

    let today = new Date();

    let currentDay = today.getDay();

    let day = '';

    if (currentDay === 6 || currentDay === 0) {
        day = 'weekend'
    } else {
        day = 'weekday'
    }

    res.render("list", { kindOfDay: day });
});

app.listen(process.env.PORT || 3000, function () {
    console.log('listening on 3000.');

});