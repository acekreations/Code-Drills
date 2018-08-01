var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersPressed = [];

document.addEventListener('keydown', function(event){
  var key = event.key;

  //Clear alert message
  document.getElementById('alert').innerHTML = "";

  if (alphabet.indexOf(key) >= 0) {
    document.getElementById('current-letter').innerHTML = key;

    lettersPressed.push(key);

    document.getElementById('all-letters').innerHTML = lettersPressed;
  }
  else {
    document.getElementById('alert').innerHTML = "Please press a letter!";
  }
})
