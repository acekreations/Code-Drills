// Activity 1


// In this activity, we're creating a function that sings the
// "99 Bottles of Beer on the Wall song"

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------





// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                  Singing 99-Bottles Function
// -------------------------------------------------------
function sing(maxBottles) {
  // -------------------- Your Code Here --------------------
  maxBottles = parseInt(maxBottles);
  while (maxBottles > 0) {
    var newLine = $("<p>");
    if (maxBottles === 1) {
      newLine.text(maxBottles + " bottle of beer on the wall. " + maxBottles + " bottle fo beer. Take one down, pass it around, no more bottles of beer on the wall :(");
      $("#output-area").append(newLine);
    }
    else {
      console.log(maxBottles);
      newLine.text(maxBottles + " bottles of beer on the wall. " + maxBottles + " bottles fo beer. Take one down, pass it around, " + (maxBottles - 1) + " bottles of beer on the wall!");
      $("#output-area").append(newLine);
    }
    maxBottles--;
  }




  // --------------------- End Code Area --------------------
}


// This sets up a listener that calls on the `sing` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();

    num = $("input").val().trim();
    $("#output-area").empty();
    sing(num);

  });
});
