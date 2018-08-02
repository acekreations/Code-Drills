var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var operators = ["+", "-", "*", "/"];

var userNums1 = [];
var userNums2 = [];
var userOpertator = "";

// document.getElementById("num1").innerHTML = key;

//listen for keystroke
document.addEventListener('keydown', function(event){
  var key = event.key;

  //checks nums array to see if key pressed was a number
  if (nums.indexOf(key) >= 0 && userOpertator.length <= 0) {
    userNums1.push(key);
    document.getElementById("num1").innerHTML = userNums1.join("");
  }
  else if (nums.indexOf(key) >= 0 && userOpertator.length >= 1) {
    userNums2.push(key);
    document.getElementById("num2").innerHTML = userNums2.join("");
  }
  //checks keystroke agains operators array to see if it was infact an accepted operator
  else if (operators.indexOf(key) >= 0) {
    userOpertator = key;
    document.getElementById("operator").innerHTML = userOpertator;
  }
  //checks if key was = sign, and calculates the numbers
  else if (key === "=") {
    if (userOpertator === "+") {
      userNums1 = userNums1.join("");
      userNums2 = userNums2.join("");
      total = parseInt(userNums1) + parseInt(userNums2);
      document.getElementById("result").innerHTML = total;
    }
    if (userOpertator === "-") {
      userNums1 = userNums1.join("");
      userNums2 = userNums2.join("");
      total = parseInt(userNums1) - parseInt(userNums2);
      document.getElementById("result").innerHTML = total;
    }
    if (userOpertator === "*") {
      userNums1 = userNums1.join("");
      userNums2 = userNums2.join("");
      total = parseInt(userNums1) * parseInt(userNums2);
      document.getElementById("result").innerHTML = total;
    }
    if (userOpertator === "/") {
      userNums1 = userNums1.join("");
      userNums2 = userNums2.join("");
      total = parseInt(userNums1) / parseInt(userNums2);
      document.getElementById("result").innerHTML = total;
    }
  }
  //checks if key was c, and clears all variables to reset calculator
  else if (key === "c") {
    userNums1 = [];
    userNums2 = [];
    userOpertator = "";
    document.getElementById("num1").innerHTML = userNums1;
    document.getElementById("operator").innerHTML = userOpertator;
    document.getElementById("num2").innerHTML = userNums2;
    document.getElementById("result").innerHTML = "";
  }
})
