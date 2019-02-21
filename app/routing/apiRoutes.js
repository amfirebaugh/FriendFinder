//require the friend data file
var friendData = require("../data/friends");

// routing
module.exports = function(app) {

    // API GET request
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    // API POST request
    app.post("/api/friends", function(req, res) {
        friendData.push(req.body);
    });
};