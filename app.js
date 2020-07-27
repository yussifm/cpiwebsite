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

var imgs = [{

        image: "pic1.jpg"
    },
    {

        image: "pic2.jpg"
    },
    {

        image: "pic3.jpg"
    },
    {

        image: "pic4.jpg"
    },
    {

        image: "pic5.jpg"
    },
    {

        image: "pic6.jpg"
    },
    {

        image: "pic7.jpg"
    },
    {

        image: "pic8.jpg"
    },
    {

        image: "pic9.jpg"
    },
    {

        image: "pic10.jpg"
    },
    {

        image: "pic11.jpg"
    },
    {

        image: "pic12.jpg"
    },
    {

        image: "pic13.jpg"
    },
    {

        image: "pic14.jpg"
    }, {

        image: "pic15.jpg"
    }, {

        image: "pic16.jpg"
    }, {

        image: "pic17.jpg"
    }, {

        image: "pic18.jpg"
    }, {

        image: "pic19.jpg"
    },
    {

        image: "pic20.jpg"
    },
    {

        image: "pic21.jpg"
    }, {

        image: "pic22.jpg"
    }, {

        image: "pic23.jpg"
    }, {

        image: "pic24.jpg"
    }, {

        image: "pic25.jpg"
    },
    {

        image: "pic26.jpg"
    }, {

        image: "pic27.jpg"
    }, {

        image: "pic28.jpg"
    },
    {

        image: "pic29.jpg"
    },
    {

        image: "pic30.jpg"
    },
    {

        image: "pic31.jpg"
    }, {

        image: "pic32.jpg"
    }, {

        image: "pic34.jpg"
    }, {

        image: "pic35.jpg"
    }, {

        image: "pic36.jpg"
    },
    {

        image: "pic33.jpg"
    }
];


app.get("/index", function(req, res) {
    res.render("index", {
        title: "Home"
    });
});

app.get("/about", function(req, res) {
    res.render("about", {
        title: "About"
    });
});

app.get("/gallary", function(req, res) {
    res.render("gallary", {
        title: "Gallary",
        imgs: imgs
    });
});

app.get("/team", function(req, res) {
    res.render("team", {
        title: "Team"

    });
});

app.get("/donate", function(req, res) {
    res.render("donate", {
        title: "Donate"

    });
});

app.listen(port, () => {
    console.info(`Server is running on port ${port}`);
});