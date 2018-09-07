// 1. Configure Server
var express = require("express");

var app = express();
var PORT = 3000;

//Expected Output:
// {
//   jerome: 50,
//   code: 80,
//   org: 58,
//   ricky: 30,
//   com: 90,
//   robert: 60,
//   chicken: 68,
//   sasha: 8
// }
var input = ["50 jerome.code.org", "30 ricky.code.com", "60 robert.chicken.com", "8 sasha.chicken.org"];

function getNumVisits(arr) {
  // 2. ================= YOUR WORK HERE ==================

  var visits = {};

  for (var i = 0; i < arr.length; i++) {
    var spaceSplit = arr[i].split(" ");
    var visitNum = parseInt(spaceSplit[0]);
    var dotSplit = spaceSplit[1].split(".");

    for (var j = 0; j < dotSplit.length; j++) {
      if (visits[dotSplit[j]]) {
        var currentVisits = visits[dotSplit[j]];
        visits[dotSplit[j]] = parseInt(currentVisits) + visitNum;
      }
      else {
        visits[dotSplit[j]] = visitNum;
      }
    }
  }

  return visits;




  // ===================================================
}


// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================
  app.get("/", function(req, res){
    res.json(getNumVisits(input));
  });






  // ===================================================


// Listener
// ===========================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


// 1. Create server
