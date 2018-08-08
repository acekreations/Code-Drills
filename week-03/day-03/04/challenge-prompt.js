// build a function that uses bubble sort to sort an array from
// highest value to lowest value and returns the new sorted array

function bubbleSort(arr) {
// ================= code goes here ===========================
  //Did this and realized the next challenge wanted a while loop, came back and did this as a for loop
  // var didSwap = false;
  // do {
  //   didSwap = false;
  //   var shorterArr = arr.length;
  //   for (var i = 0; i < shorterArr; i++) {
  //     if (arr[i] < arr[i+1]) {
  //       itemI = arr[i];
  //       arr[i] = arr[i+1];
  //       arr[i+1] = itemI;
  //       didSwap = true;
  //     }
  //   }
  //   shorterArr--;
  // } while (didSwap);
  // return arr;

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j+1]) {
        itemJ = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = itemJ;
      }
    }
  }
  return arr







// ============================================================
}

var testArray = [34, 23, 3, 76, 20, 84, 18, 9];
testArray = bubbleSort(testArray);
console.log(testArray);
