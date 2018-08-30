// Long Division

// This is the divide function. It takes in a dividend and a divisor
// and returns the quotient from dividing the dividend by the divisor
function divide (dividend, divisor) {
// -------------------- Your Code Here --------------------
count = 0;
result = 0;
i = 0;
while (i <= dividend) {
  if (count === divisor) {
    result++;
    count = 0;
  }
  count++;
  i++;
}
console.log("Remainder: " + count);
return result;


// --------------------- End Code Area --------------------
}

// Exporting the divide function for use in the test file.
module.exports = divide;
