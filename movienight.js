var express = require("express");

var app = express();

app.get("/movies", function(request, response){
    response.send("Welcome to movie night");
});

app.listen(7777, function(){
    console.log("Listening on port: "+7777);
})