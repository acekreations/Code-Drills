
// declear a variable of welcomePrompt with a prompt and a string of Welcome to the sandwich shop, what do i call you ?
var welcomePrompt = prompt("Welcome to the sandwich shop, what is your name?");

// then alert with a string of a variable of hello and the varible of welcomePrompt
var hello = alert("Hello, " + welcomePrompt);

// declear a variable with a confirm and a string of are you here for a sandwich ?
var isSandwich = confirm("Are you here for a sandwich?");

// if question is equal to true

    // prompt the user with a string of What kind of sandwich would you like ?

    // then write on the page with the variable welceomPrompt and a string of please wait 10 min for your with another variable of foodPrompt

    // question isn't true write on the page with a string of if you dont want a sandwich what are you here for !

if (isSandwich) {
  var foodPrompt = prompt("What kind of sandwich would you like?");

  document.write("Thank you " + welcomePrompt + ", please wait 10 mintues for your " + foodPrompt + " sandwich.");
}
else {
  document.write("What are you here for?");
}
