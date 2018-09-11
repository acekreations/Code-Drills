//  YOUR WORK HERE
var minions = [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]];

var productivity = 0;

function findMinion(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] === num) {
      productivity += arr[i][1];
      return console.log(arr[i]);
    }
  }
}



findMinion(minions, 1);
