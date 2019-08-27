var express = require("express");
var app = express();

app.get("/", function (req, res) {
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing/", function (req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {Thing: thing});
});

app.get("*", (req, res)=> res.send("The page not found!"));
app.listen(3000, () => console.log("Server is started!"));