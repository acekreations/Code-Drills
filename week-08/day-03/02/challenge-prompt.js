// Keyboard Row


// the `keyboardRow` function takes in an array of strings and
// returns a new array containing all the words that can be
// individually typed on a single row of a standard "QWERTY"
// keyboard.
function keyboardRow(arr) {
  // -------------------- Your Code Here --------------------
  var row1 = "qwertyuiop";
  row1 = row1.split("");
  var row2 = "asdfghjkl";
  row2 = row2.split("");
  var row3 = "zxcvbnm";
  row3 = row3.split("");

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      var find = uppercase.indexOf(str[i]);
      if (find > -1) {
        newStr = newStr + lowercase[find];
      }
    }
  }



  // -------------------- End Code Area ---------------------
}


var wordArray = ["pet", "world", "bc", "hello", "a", "flash", "blastoff", "to"]
// Should be [ 'pet', 'bc', 'a', 'flash', 'to' ]
console.log(keyboardRow(wordArray))
