const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const port = 3000;

const app = express();

app.use(bodyParser());
//statics
app.use(express.static("./public"));
app.use(express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/public/img"));
app.use(express.static(__dirname + "/public/js"));

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/index", function(req, res) {
    res.render("index", {
        text: "CPI Webiste with nodjs and ejs",
        title: "Home"
    });
});

app.get("/about", function(req, res) {
    res.render("about", {
        text: "CPI Webiste with nodjs and ejs",
        title: "About"
    });
});

app.get("/gallary", function(req, res){
    res.render("gallary", {
        text: "CPI Webiste with nodjs and ejs",
        title: "Gallary"
    });
});

app.listen(port, () => {
    console.info(`Server is running on port ${port}`);
});