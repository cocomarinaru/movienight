var express = require("express");
var app = express();
var PORT = 7777

app.get("/movies", function (request, response) {
    response.send("Welcome to movie night");
});

app.get("/:name", function (request, response) {
    var name = request.params.name;
    response.send("Hello " + name);
});

app.listen(process.env.PORT || PORT, function () {
    console.log("Listening on port: " + PORT);
})