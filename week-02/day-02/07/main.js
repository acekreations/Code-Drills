var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var operators = ["+", "-", "*", "/"];

var userNums = [];
var userOpertator;

document.addEventListener('keydown', function(event){
  var key = event.key;

  if (nums.indexOf(key) >= 0) {
    userNums.push(key);
    console.log("number: " + userNums);
    document.getElementById("num1").innerHTML = key;
  }
  else if (operators.indexOf(key) >= 0) {
    userOpertator = key;
    console.log("operator: " + userOpertator);
  }
  else if (key === "=") {
    console.log("calculate");
    if (userOpertator === "+") {
        total = parseInt(userNums[0]) + parseInt(userNums[1]);
        console.log(total);
    }
    if (userOpertator === "-") {
        total = parseInt(userNums[0]) - parseInt(userNums[1]);
        console.log(total);
    }
    if (userOpertator === "*") {
        total = parseInt(userNums[0]) * parseInt(userNums[1]);
        console.log(total);
    }
    if (userOpertator === "/") {
        total = parseInt(userNums[0]) / parseInt(userNums[1]);
        console.log(total);
    }
  }
  else if (key === "c") {
    console.log("Clear");
    userNums = [];
    userOpertator = "";
  }
})
