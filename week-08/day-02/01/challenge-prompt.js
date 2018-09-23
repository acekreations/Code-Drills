// Reverse Words


// Write a function `reverseWords` that takes in a sentence as a string and
// reverses the words within the sentence. Each word within the sentence is
// seperated by a space and you can assume there will not be more than one
// space between words.
function reverseWords(str){
  // -------------------- Your Code Here --------------------
  //split up words by space
  str = str.split(" ");

  var newStr = str.map(function(letter){
    return letter.split("").reverse().join("");
  });

  return newStr.join(" ");




  // -------------------- End Code Area ---------------------
}

module.exports = reverseWords;
