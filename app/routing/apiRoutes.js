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
        var userScoresArray = req.body.scores;
        var calcOneQ = 0;
        var calcTotal = [];

        for (var i = 0; i < friendData.length - 1; i++) {
            for (var j = 0; j < userScoresArray.length; j++) {
                calcOneQ += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userScoresArray[j])));
            }
            calcTotal.push(calcOneQ);
        }
        var calcMatch = Math.min(...calcTotal);
        var matchNum = calcTotal.indexOf(calcMatch);
        var match = friendData[matchNum];

        res.json(match);
    });
};