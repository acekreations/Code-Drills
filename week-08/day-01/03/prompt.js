//  YOUR WORK HERE

function pyramid(levels) {
  var largestNum = findLargestNum(levels);
  var widthCount = ["#"];

  for (var i = 0; i < levels; i++) {
    var spaces = (largestNum - widthCount.length) / 2;
    var spacesStr = "";
    for (var j = 0; j < spaces; j++) {
      spacesStr = spacesStr + "`";
    }
    console.log(spacesStr.concat(widthCount.join("")));
    widthCount.push("#", "#");
  }

}

function findLargestNum(num) {
  var largestNum = 1;
  for (var i = 1; i < num; i++) {
    largestNum += 2;
  }
  return largestNum;
}

pyramid(11);

console.log();
