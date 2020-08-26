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
        image: "pic37.jpg",
    },
    {
        image: "pic38.jpg",
    },
    {
        image: "pic39.jpg",
    },
    {
        image: "pic40.jpg",
    },
    {
        image: "pic41.jpg",
    },
    {
        image: "pic42.jpg",
    },
    {
        image: "pic43.jpg",
    },
    {
        image: "pic44.jpg",
    }, {
        image: "pic45.jpg",
    }, {
        image: "pic46.jpg",
    }, {
        image: "pic47.jpg",
    }, {
        image: "pic48.jpg",
    }, {
        image: "pic49.jpg",
    }, {
        image: "pic50.jpg",
    }, {
        image: "pic51.jpg",
    },
    {
        image: "pic52.jpg",
    }, {
        image: "pic53.jpg",
    }, {
        image: "pic54.jpg",
    }, {
        image: "pic55.jpg",
    }, {
        image: "pic56.jpg",
    }, {
        image: "pic57.jpg",
    }, {
        image: "pic58.jpg",
    }, {
        image: "pic59.jpg",
    },
];

app.get("/", function(req, res) {
    res.render("index", {
        title: "Home",
        content1: "cpimpact.org",
        content2: "Coalition for Positive Impact (CPI) is a Non-Governmental nonprofit organization that is focused on making Africa a hub for the effective development of young leaders and entrepreneurs. We are committed to empowering and assisting young people in the most deprived regions and communities of Africa through innovation, mentorship, and technology. We invest in and assist young entrepreneurs to develop their enterprises and/or organizations, therefore causing them to combat poverty and puzzle out the youth unemployment challenge of Africa. We also assist young people build their leadership and entrepreneurial skills.",
    });
});

app.get("/about", function(req, res) {
    res.render("about", {
        title: "About",
        content1: "Coalition for Positive Impact (CPI) is a Non-Governmental nonprofit organization ",
        content2: "Coalition for Positive Impact (CPI) is a Non-Governmental nonprofit organization that is focused on Making Africa a hub for the effective development of young leaders and entrepreneurs",
    });
});

app.get("/gallary", function(req, res) {
    res.render("gallary", {
        title: "Gallery",
        content1: "Coalition for Positive Impact (CPI)",
        content2: "gallery and ACHIEVEMENTS pictures",
        imgs: imgs,
    });
});

app.get("/news", function(req, res) {
    res.render("news", {
        title: "news",
        content1: "Coalition for Positive Impact (CPI) Igniting Dreams 2020",
        content2: "",
    });
});

app.get("/management", function(req, res) {
    res.render("management", {
        title: "Management Team",
        content1: "cpimpact management team",
        content2: "cpimpact[Coalition for Positive Impact (CPI)]Executive Director, Director of Finance ",
    });
});

app.get("/board", function(req, res) {
    res.render("board", {
        title: "Board",
        content1: "Coalition for Positive Impact (CPI) board",
        content2: "cpimpact.org board Coalition for Positive Impact (CPI)",
    });
});

app.get("/donate", function(req, res) {
    res.render("donate", {
        title: "Donate",
        content1: "",
        content2: "",
    });
});


app.get("/contact", function(req, res) {
    res.render("contact", {
        title: "Contact",
        content1: "contact us: ",
        content2: "",
    });
});

app.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`);
});