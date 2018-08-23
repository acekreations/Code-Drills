
function fizzBuzz(n) {
// ===================== YOUR WORK HERE =====================
for (var i = 0; i <= n; i++) {
  if ((i % 3) === 0 && (i % 5) === 0) {
    console.log("FizzBuzz");
  }
  else if ((i % 3) === 0) {
    console.log("Fizz");
  }
  else if ((i % 5) === 0) {
    console.log("FizzBuzz");
  }
  else {
    console.log(i);
  }
}



// ==========================================================

}

var input = process.argv[2];

fizzBuzz(input);
