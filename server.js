// dependencies
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// create express app
var app = express();
var PORT = process.env.PORT || 8080;

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// require the routing files
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// server listening
app.listen(PORT, function() {
    console.log("Application listening on Port: " + PORT);
});