
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

let items = ["buy food", "cook food", "eat food"];


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/index.html');

    let today = new Date();

    // let currentDay = today.getDay();

    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };


    let day = today.toLocaleDateString('en-US', options);

    // //switch statement to find the day of the week and assinging it to the day variable
    // switch (currentDay) {
    //     case 1:
    //         day = "Monday";
    //         break;
    //     case 2:
    //         day = "Tuesday";
    //         break;
    //     case 3:
    //         day = "Wednesday";
    //         break;
    //     case 4:
    //         day = "Thursday";
    //         break;
    //     case 5:
    //         day = "Friday";
    //         break;
    //     case 6:
    //         day = "Saturday";
    //         break;
    //     case 7:
    //         day = "Sunday";
    //         break;
    //     default:
    //         console.log("Error: current day is equal to " + currentDay);
    // };

    res.render("list", {
        kindOfDay: day,
        newListItems: items
    });
});

app.post("/", function(req, res) {
    let item = req.body.newItem;
    console.log(item);

    items.push(item);

    res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
    console.log('listening on 3000.');

});