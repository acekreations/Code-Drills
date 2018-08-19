// Activity 5


// In this activity, we're creating a function that counts the
// number of consonants in a string


// -------------------------------------------------------
//                       Count Consonants
// -------------------------------------------------------
function countCons(str) {
  // -------------------- Your Code Here --------------------
  str = str.toLowerCase();
  var cons = "bcdfghjklmnpqrstvwxyz";
  cons = cons.split("");
  var numCons = 0;

  for (var i = 0; i < str.length; i++) {
    if (cons.indexOf(str[i]) >= 0) {
      numCons++;
    }
  }
  return numCons;


  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `countCons` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();

    num = $("input").val().trim();
    $("#output-area").text(countCons(num));

  });
});
