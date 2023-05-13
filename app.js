
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

let items = ["buy food", "cook food", "eat food"];

let workItems = [];


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

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
        listTitle: day,
        newListItems: items
    });
});

app.post("/", function(req, res) {
    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function(req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(process.env.PORT || 3000, function () {
    console.log('listening on 3000.');

});