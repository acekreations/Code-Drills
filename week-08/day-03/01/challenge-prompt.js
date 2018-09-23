// toLowerCase


// This function takes in a string as the argument and returns
// a new string with all the characters converted to lower case
function toLowerCase(str) {
  // -------------------- Your Code Here --------------------
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWRXYZ";
  uppercase = uppercase.split("");
  var lowercase = "abcdefghijklmnopqrstuvwrxyz";
  lowercase = lowercase.split("");

  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    var find = uppercase.indexOf(str[i]);
    if (find > -1) {
      newStr = newStr + lowercase[find];
    }
    else {
      newStr = newStr + str[i];
    }
  }

  return newStr;


  // -------------------- End Code Area ---------------------
}


// Should be "hello world"
console.log(toLowerCase("Hello World"));

// Should be "test"
console.log(toLowerCase("Test"));

// Should be "rotating cap with nu|v|b3r5 and $ymb0!s"
console.log(toLowerCase("RoTaTiNg CaPs With Nu|V|b3R5 aNd $YmB0!s"));

// Should be an empty string
console.log(toLowerCase(""));
