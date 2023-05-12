
const express = require('express');

const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/index.html');

    let today = new Date();

    let currentDay = today.getDay();

    let day = '';

    //switch statement to find the day of the week and assinging it to the day variable
    switch (currentDay) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            console.log("Error: current day is equal to " + currentDay);
    };

    // if (currentDay === 1) {
    //     day = 'monday'
    // } else if (currentDay === 2) {
    //     day = 'tuesday'
    // } else if (currentDay === 3) {
    //     day = 'wednesday'
    // } else if (currentDay === 4) {
    //     day = 'thursday'
    // } else if (currentDay === 5) {
    //     day = 'friday'
    // } else if (currentDay === 6) {
    //     day = 'saturday'
    // } else() {
    //     day = 'sunday'
    // }

    res.render("list", { kindOfDay: day });
});

app.listen(process.env.PORT || 3000, function () {
    console.log('listening on 3000.');

});