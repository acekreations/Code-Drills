// Section 1
// Set a variable of userTyped and use get element by id or query selector and set it equal to the element with the id of letterTyped
var userTyped = document.getElementById("letterTyped");
// Set a variable of letterUsed and use get element by id or query selector and set it equal to the element with the id of lastLetter
var letterUsed = document.getElementById("lastLetter");
// create a variable called LetterUsedArray and have it equal and empty array
var letterUsedArray = [];

// Section 2
// now use the onkey up jquery function and pass it the arguement of event
document.onkeyup = function(even){
  var userInput = event.key;

  userTyped.textContent = userInput;

  letterUsedArray.push(userInput);

  letterUsed.textContent = letterUsedArray;
}
    // now set a variable of userInput equal to the event.key

    // use the userTyped variable and the textContent property equal the userInput

    // push the userInput into the letterUsedArray

    // use the letterUSed variable and the textContent property plus equal the userInput plus a string ,
