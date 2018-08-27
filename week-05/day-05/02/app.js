var inq = require("inquirer");
var fs = require("fs");
var quotes = {
  "Jim Carrey": "Behind every great man is a woman rolling her eyes",
  "Mitch Hedberg": "My fake plants died because I did not pretend to water them",
  "Albert Einstein": "Look deep into nature, and then you will understand everything better"
};

function mainMenu() {
  inq.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: ["Add list of qoutes", "See list of quotes", "Exit"],
      name: "mainMenuChoice"
    }
  ]).then(function(response){

    switch (response.mainMenuChoice) {
      case "Add list of qoutes":
          addQuote();
        break;
      case "See list of quotes":
          displayAuthors();
        break;
      case "Exit":
          endGame();
        break;
      default:
        console.log("Try again...");
    }
  });
}

function addQuote() {
  inq.prompt([
    {
      type: "input",
      message: "What is the name of the author?",
      name: "authorAnswer"
    },
    {
      type: "input",
      message: "What is the quote?",
      name: "quoteAnswer"
    }
  ]).then(function(response){
    quotes[response.authorAnswer] = response.quoteAnswer;
    mainMenu();
  });

}

function displayAuthors() {
  var authors = [];

  for(var key in quotes){
    authors.push(key);
  }

  inq.prompt([
    {
      type: "list",
      message: "What author wuould you like to see?",
      choices: authors,
      name: "authorChoice"
    }
  ]).then(function(response){
    for(var key in quotes){
      if (key === response.authorChoice) {
        console.log("--------------------");
        console.log(quotes[key] + " - " + key);
        console.log("--------------------");
      }
    }
    mainMenu();
  });

}

function endGame() {
  console.log("Goodbye!");
}

mainMenu();
