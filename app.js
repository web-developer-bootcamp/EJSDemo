var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("home");
});

app.get("/fallinlovewith/:thing/", function (req, res) {
    var thing = req.params.thing;
    res.render("love", { Thing: thing });
});

app.get("/posts", function (req, res) {
    var posts = [
        { title: "Post 1", author: "Susy" },
        { title: "My adorable pet", author: "Charlie" },
        { title: "Can you believe this?", author: "Colt" }
    ];
    res.render("posts", {Posts: posts});
});

app.get("*", (req, res) => res.send("The page not found....................."));
app.listen(3000, () => console.log("Server is started!"));
