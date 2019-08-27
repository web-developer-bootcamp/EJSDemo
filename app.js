var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing/", function (req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", { Thing: thing });
});

app.get("/posts", function (req, res) {
    var posts = [
        { title: "Post 1", author: "Susy" },
        { title: "My adorable pet", author: "Charlie" },
        { title: "Can you believe this?", author: "Colt" }
    ];
    res.render("posts.ejs", {Posts: posts});
});

app.get("*", (req, res) => res.send("The page not found....................."));
app.listen(3000, () => console.log("Server is started!"));
