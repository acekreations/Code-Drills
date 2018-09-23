// First Three Function


// The `firstThree` function will console log "Hello, I have been run X times"
// where `X` is the number of times it's been run so far; then it will return
// true. after it has been run 3 times, subsequent invocations of this function
// will not console log anything and return false.
//
// -------------------- Your Code Here --------------------
// var firstThree = (function() {
//   var count = 1;
//
//   return function(){
//     count += 1;
//     return count;
//   };
// });

var firstThree = (function () {
    var counter = 0;
    return function () {
      if (counter < 3) {
        counter += 1;
        return "I'v rand " + counter + " times";
      }
      else {
        return false;
      }
    };
})();





// -------------------- End Code Area ---------------------


console.log(firstThree())
console.log(firstThree())
console.log(firstThree())
console.log(firstThree())
console.log(firstThree())
