//require the friend data file
var friendData = require("../data/friends");

// routing
module.exports = function(app, parser) {

    // API GET request
    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

    // API POST request
    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        friendData.push(req.body);
        var userScoresArray = req.body.scores;
        var calcOneQ = 0;
        var calcTotal = [];

        for (var i = 0; i < friendData.length - 1; i++) {
            for (var j = 0; j < userScoresArray.length; j++) {
                calcOneQ += (Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userScoresArray[j])));
            }
            calcTotal.push(calcOneQ);
            console.log(calcOneQ);
            console.log(calcTotal);
        }
        var calcMatch = Math.min(...calcTotal);
        var matchNum = calcTotal.indexOf(calcMatch);
        var match = friendData[matchNum];
        calcTotal.splice(0,calcTotal.length);
        console.log(calcMatch);
        console.log(matchNum);
        console.log(match);

        res.json(match);
    });
};