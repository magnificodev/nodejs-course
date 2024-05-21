const path = require("path");
const express = require("express");
const expressHbs = require("express-handlebars");

const app = express();
const users = [];

// Middleware for processing body-parser and static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Template Engine
// app.engine(
//     "hbs",
//     expressHbs.engine({
//         layoutsDir: "views/layouts/",
//         defaultLayout: "main-layout",
//         extname: "hbs",
//     })
// );
app.set("view engine", "ejs");
app.set("views", "views");

// Router
app.get("/", (req, res) => {
    res.render("index", {
        pageTitle: "ADD USER PAGE",
        path: "/",
        indexCSS: true,
        activeAddUser: true
    });
});

app.get("/users", (req, res) => {
    res.render("users", {
        pageTitle: "USERS PAGE",
        path: "/users",
        users,
        usersCSS: true,
        activeUsers: true,
        hasUsers: users.length > 0
    });
});

app.post("/add-user", (req, res) => {
    users.push({ username: req.body.username });
    console.log(users);
    res.redirect("/users");
});

// Start the server
app.listen(3000, () => {
    console.log("Server is listening...");
});
