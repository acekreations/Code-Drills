//Dependencies
var express = require("express");
var app = express();

var PORT = 3000;

var alphabet = "abcdefghijklmnopqrstuvxyz";
alphabet = alphabet.split("");


//Routes
app.get("/", function(req, res){
  return res.send("Hello there");
});

app.get("/:input", function(req, res){
  return res.send(alphabetSort(req.params.input));
});

//functions
function alphabetSort(input) {
  var result = [];

  for (var i = 0; i < alphabet.length; i++) {
    var count = 0;
    for (var j = 0; j < input.length; j++) {
      if (alphabet[i] === input[j]) {
        count++;
      }
    }
    if (count % 2 === 0) {
      result.push(alphabet[i]);
    }
  }
  return result.join("");
}










app.listen(PORT, function(){
  console.log("listening on port " + PORT);
});
