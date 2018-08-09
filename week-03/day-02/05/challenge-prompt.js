// Day 02
// Activity 5


// This function takes in two strings and checks whether they're anagrams of each other.
// Return true if they are anagrams and false if they aren't anagrams.
function anagramCheck (str1, str2) {

  // ---------- Your Code Here ----------
  //My way
  // var str1 = str1.toLowerCase().replace(/ /g,'');
  // var str2 = str2.toLowerCase().replace(/ /g,'');
  //
  // if (str1.length === str2.length) {
  //   for (var i = 0; i < str1.length; i++) {
  //     if (str2.indexOf(str1[i]) === -1) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }
  // return false;

  //Trying suggested way
  var str1 = str1.toLowerCase().replace(/ /g,'');
  var str2 = str2.toLowerCase().replace(/ /g,'');

  if (str1.length === str2.length) {
    for (var i = 0; i < str1.length; i++) {
      str2 = str2.replace(str1[i], "");
    }
    if (str2.length <= 0) {
      return true;
    }
    else {
      return false;
    }
  }
  return false;




  // ----------- End Code Area -----------

}

// This should console log true
console.log(anagramCheck("I am Lord Voldemort", "Tom Marvolo Riddle"));

// This should console log true
console.log(anagramCheck("Astronomer", "Moon Starer"));

// This should console log false
console.log(anagramCheck("Hello World", "Goodnight Sun"));

// This should console log false
console.log(anagramCheck("Supercalifragilisticexpialidocious", "If you say it loud enough"));
