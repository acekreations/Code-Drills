// Day 05
// Activity 03

// The README.md has instructions for this exercise


// This function should populate our page with the 4 buttons we need
// We will be defining this function right now and invoking it later
function populateButtons() {
  // Your code goes here
  var btnHello = $("<button>");
  btnHello.text("Hello");
  btnHello.val("Hello");
  btnHello.appendTo($("#buttons-area"));

  var btnWorld = $("<button>");
  btnWorld.text("World");
  btnWorld.val("World");
  btnWorld.appendTo($("#buttons-area"));

  var btnClear = $("<button>");
  btnClear.text("Clear");
  btnClear.val("Clear");
  btnClear.appendTo($("#buttons-area"));

  // End of your code area
}

// This is jQuery shorthand to a document.ready
// This tells our javascript to wait until the page has finished
// loading before running the code.
$(function () {

  // call on the populateButtons functions we defined above.
  populateButtons();

  // This is the key press listener that saves the key the user pressed.
  // Refer to step 4 on the README
  document.onkeyup = function(event) {
    // Your code goes here
    var userInput = event.key;
    var btnVal = $("#userBtn").val();
    var btnUser = $("<button>");

    //concatenate if btn val exists if not just use userInput
    if (btnVal) {
      var newBtnVal = btnVal + userInput;
    }
    else {
      var newBtnVal = userInput;
    }

    //Create button when user presses a button
    btnUser.text("Show My Text");
    btnUser.attr("id", "userBtn");
    btnUser.val(newBtnVal);
    $("#user-button-area").html(btnUser);
    console.log("button pressed");
    // End of your code area
  }

  // One click listener for all our buttons. You're going to have to figure out
  // which button was clicked and handle the logic for that button inside here
  // Refer to step 3 on the README
  $(document).on("click", "button", function (event) {
    // Your code goes here
    var parent = $(this).parent().attr("id");

    if (parent === "buttons-area") {
      var newParagraph = $("<p>");
      var value = $(this).val();
      newParagraph.text(value);
      $(newParagraph).appendTo("#output");
    }
    else if (parent === "user-button-area") {
      var userBtnVal = $("#userBtn").val();
      $("#user-button-area").empty();
      $("#output").html(userBtnVal);
    }
    // End of your code area
  })

})
