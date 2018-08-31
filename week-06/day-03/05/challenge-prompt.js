/*Write a function called "smallestNumber".

Given an array of mixed elements, "smallestNumber" returns the smallest number in the array

ignore values that aren't numbers

Starter Code :*/
function smallestNumber(arr) {
  // code starts here
  var smallestNum;
  for (var i = 0; i < arr.length; i++) {
    if (typeof smallestNum === "undefined" && typeof arr[i] === "number") {
      smallestNum = arr[i];
    }
    else if (typeof arr[i] === "number" && arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }

  return smallestNum;









  // code ends here
}
var output = smallestNumber([4, 'lincoln', 9, 'octopus', 'a', 5, 10, 'hello']);
console.log(output); // --> 4
