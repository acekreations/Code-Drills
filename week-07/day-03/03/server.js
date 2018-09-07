// 1. Configure Server
var express = require("express");
var app = express();
var PORT = 3000;
//Expected Output:
// "ethae uickqae ownbrae ogdae umpedjae overwae ethae azylae oxfae applewae"
var input = "The quick brown dog jumped over the lazy fox apple";

function pigLatin(sen) {
  // 2. ================= YOUR WORK HERE ==================
  var vowels = ["a", "e", "i", "o", "u"];
  var retStr = [];

  sen = sen.split(" ");

  //loop through the sentence giving us each word
  for (var i = 0; i < sen.length; i++) {
    //loop through the letters in each word
    LetterLoop:
    for (var j = 0; j < sen[i].length; j++) {
      // loop through the vowels array to check against current letter
      for (var x = 0; x < vowels.length; x++) {
        //if a vowl matches splice up to the vowel and swap the second part of the word with the firt part
        if (vowels[x] === sen[i][j]) {
          var consonant = sen[i].substring(0, j + 1).toLowerCase();
          var endWord  = sen[i].substring(j).toLowerCase();
          retStr.push(endWord + consonant + "ae");
          break LetterLoop;
        }
      }

    }

  }

  return retStr;



  // ===================================================
}


// At the root route, send the solution as JSON
//3. ================= YOUR WORK HERE ==================

app.get("/", function(req, res) {
  return res.json(pigLatin(input));
});





// ===================================================


// Listener
// ===========================================================

// 1. Create server
app.listen(PORT, function() {
  console.log("Listening on port " + PORT);
});
