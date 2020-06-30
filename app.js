const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = 3000;

const app = express();

app.use(bodyParser());

//statics
app.use(express.static('./public'));
app.use('css', express.static(__dirname + '/public/css'));
app.use('img', express.static(__dirname + '/public/img'));
app.use('js', express.static(__dirname + '/public/js'));

app.set('views', './views')
app.set("view engine", 'ejs');

app.get("", function(req, res) {
    res.render("index", {
        text: "CPI Webiste with nodjs and ejs"
    });
});

app.get("/about", function(req, res) {
    res.render("about", {
        text: "CPI Webiste with nodjs and ejs"
    });
});

app.listen(port, () => {
    console.info(`Server is running on port ${port}`);
});