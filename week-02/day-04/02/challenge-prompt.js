$(document).ready(function () {
//In each instance, write your code directly below the question asking for it.


        //1. create a variable called text and have it equal an empty string
        var text = "";

        //2. create a function called randomizingText
        function randomizingText(){
          var possibleLetters = "abcdefghijklmnopqrstuvwxyz";
          var randNum = Math.floor((Math.random() * possibleLetters.length) + 1);
          var randomLetter = possibleLetters.charAt(randNum);
          text = text + randomLetter;
          return text;
        }

            //3. create a variable called possibleLetters set to a string containing the whole alphabet. For example possibleLetters = "ABCD..."

            // 4. The text variable will continue to grow in length as the user clicks the question mark. Reassign the text variable to itself plus a new random letter. You will need to use the possibleLetters variable to accomplish this. Research the charAt() method if you're stuck.

            //5. Finally have this function return the current value of the text variable

    $(".jumbotron").on("click", "#randomLetter", function () {
        var displayLetters = randomizingText();

        console.log(displayLetters);

        $("#letters").text(displayLetters);

        // console.log the function randomizingText (don't forget to invoke the function)

        // append the text variable to the h1 tag with the id of letters


    });

});
