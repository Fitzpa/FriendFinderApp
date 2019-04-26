// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    let totalDifference = 0;
    let bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    let newFriend = req.body;
    let userName = newFriend.name;
    let userScore = newFriend.score;
    let b = userScore.map(function(item) {
      return parseInt(item, 10);
    });
    newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      score: b
    };

    let sum = b.reduce((a,b) => a + b, 0);
    console.log("best match friend difference " + bestMatch.friendDifference);

    for(let l = 0; l < friends.length; l++) {
      totalDifference = 0;
      let bFriendScore = friends[l].score.reduce((a,b) => a + b, 0);
      totalDifference += Math.abs(sum - bFriendScore);

      if(totalDifference <= bestMatch.friendDifference) {
        bestMatch.name = friends[l].name;
        bestMatch.photo = friends[l].photo;
        bestMatch.friendDifference = totalDifference;
      }
    }
    friends.push(newFriend);

    // We then display the JSON to the users
    res.json(bestMatch);
  });
};
