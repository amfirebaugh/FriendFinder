// dependencies
var express = require("express");
//var path = require("path");

// create express app
var app = express();
var PORT = process.env.PORT || 8080;

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require the routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// server listening
app.listen(PORT, function() {
    console.log("Application listening on Port: " + PORT);
});