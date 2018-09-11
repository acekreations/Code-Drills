//  YOUR WORK HERE

var finalArr = [];

function subArrs(arr, num) {
  var tempArr = [];
  for (var i = 0; i < num; i++) {
    if (arr[0]) {
      tempArr.push(arr[0]);
      arr.shift();
    }
  }
  finalArr.push(tempArr);
  if (arr.length > 0) {
    subArrs(arr, num);
  }
  else {
    console.log(finalArr);
  }
}


var arr = [5,2,6,7,8,9,4,6,8];
var num = 3;

subArrs(arr, num);
