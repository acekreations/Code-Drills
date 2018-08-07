// Day 01
// Activity 02

// This function takes in a string and returns a jQuery element.
// The element should be a button that contains the argument string as both
// its text value and its data value. We will be using this button to
// display the string in the display-area when clicked later.
function createButton(str) {
  // ---------- Your Code Here ----------
  $("#button-area").append("<button value='" + str + "'>" + str + "</button>");





  // ---------- End of Code area ----------
}



// This function is executed when one of our generated buttons is clicked.
// We've been using anonymous functions up until now, but we can define this
// function before hand and pass in the pointer to this function in the
// click listener.
// This function should take the string stored in the data field of the button
// that was clicked on and append it to the display-area.
function displayContent(event) {
  // ---------- Your Code Here ----------
  $("#display-area").append(event + " ");





  // ---------- End of Code area ----------
}



// document.ready shorthand
// Put your click listeners here.
$(function () {
  // ---------- Your Code Here ----------
  $("form")

  $("#submit-button").on("click", function(event){
    event.preventDefault();
    var userInput = $("#user-input").val();
    createButton(userInput);
    $("#user-input").val("");
  })

  $("#clear-button").on("click", function(){
    $("#display-area").empty();
    $("#button-area").empty();
  })

  $("#button-area").on("click", "button", function(){
    var btnVal = $(this).val();
    console.log(btnVal);
    displayContent(btnVal);
  })





  // ---------- End of Code area ----------
})
