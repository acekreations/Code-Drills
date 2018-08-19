// Activity 4


// In this activity, we're creating a function that generates
// the first few elements of the fibonacci sequence

// -------------------------------------------------------
//                 Generate Fibonacci Sequence
// -------------------------------------------------------
function fibonacci(num) {
  // -------------------- Your Code Here --------------------
  var i = 0;
  var fibonacci = [0, 1];

  //num-2 accounts for starting at zero and for the extra loop that while takes before the statement is true
  if (num === "0") {
    return "Please enter a larger number";
  }
  else if (num === "1") {
    return "0";
  }
  while (i < num-2) {
    fibonacci.push(fibonacci[i] + fibonacci[i+1]);
    i++;
  }
  return fibonacci;




  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `fibonacci` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();

    num = $("input").val().trim();
    $("#output-area").text(fibonacci(num));

  });
});
