const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const compression = require("compression");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(compression());
app.use(bodyParser());

//statics
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname + "/public/css")));
app.use(express.static(path.join(__dirname + "/public/img")));

app.use(express.static(path.join(__dirname + "/public/js")));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

var imgs = [{
        image: "pic1.jpg",
    },
    {
        image: "pic2.jpg",
    },
    {
        image: "pic3.jpg",
    },
    {
        image: "pic4.jpg",
    },
    {
        image: "pic5.jpg",
    },
    {
        image: "pic6.jpg",
    },
    {
        image: "pic7.jpg",
    },
    {
        image: "pic8.jpg",
    },
    {
        image: "pic9.jpg",
    },
    {
        image: "pic10.jpg",
    },
    {
        image: "pic11.jpg",
    },
    {
        image: "pic12.jpg",
    },
    {
        image: "pic13.jpg",
    },
    {
        image: "pic14.jpg",
    },
    {
        image: "pic15.jpg",
    },
    {
        image: "pic16.jpg",
    },
    {
        image: "pic17.jpg",
    },
    {
        image: "pic18.jpg",
    },
    {
        image: "pic19.jpg",
    },
    {
        image: "pic20.jpg",
    },
    {
        image: "pic21.jpg",
    },
    {
        image: "pic22.jpg",
    },
    {
        image: "pic23.jpg",
    },
    {
        image: "pic24.jpg",
    },
    {
        image: "pic25.jpg",
    },
    {
        image: "pic26.jpg",
    },
    {
        image: "pic27.jpg",
    },
    {
        image: "pic28.jpg",
    },
    {
        image: "pic29.jpg",
    },
    {
        image: "pic30.jpg",
    },
    {
        image: "pic31.jpg",
    },
    {
        image: "pic32.jpg",
    },
    {
        image: "pic34.jpg",
    },
    {
        image: "pic35.jpg",
    },
    {
        image: "pic36.jpg",
    },
    {
        image: "pic33.jpg",
    },
];

app.get("/", function(req, res) {
    res.render("index", {
        title: "Home",
    });
});

app.get("/about", function(req, res) {
    res.render("about", {
        title: "About",
    });
});

app.get("/gallary", function(req, res) {
    res.render("gallary", {
        title: "Gallary",
        imgs: imgs,
    });
});

app.get("/management", function(req, res) {
    res.render("management", {
        title: "Management Team",
    });
});


app.get("/board", function(req, res) {
    res.render("board", {
        title: "Borad",
    });
});


app.get("/donate", function(req, res) {
    res.render("donate", {
        title: "Donate",
    });
});

app.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`);
});