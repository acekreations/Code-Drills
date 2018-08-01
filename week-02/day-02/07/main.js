var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var operators = ["+", "-", "*", "/"];

document.addEventListener('keydown', function(event){
  var key = event.key;

  //Clear alert message
  // document.getElementById('alert').innerHTML = "";

  if (nums.indexOf(key) >= 0) {
    console.log("number: " + key);
  }
  else if (operators.indexOf(key) >= 0) {
    console.log("operator: " + key);
  }
  else if (key === "=") {
    console.log("calculate");
  }
  else if (key === "c") {
    console.log("");
  }
})
