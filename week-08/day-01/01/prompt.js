//  YOUR WORK HERE

function addDigits(num) {
  var numStr = num.toString();

  if (numStr.length >= 2) {
    var numArr = numStr.split("");
    var reducer = (acc, cur) => parseInt(acc) + parseInt(cur);
    var numTotal = numArr.reduce(reducer);
    addDigits(numTotal);
  }
  else {
    console.log(num);
  }
}


addDigits(89657);
