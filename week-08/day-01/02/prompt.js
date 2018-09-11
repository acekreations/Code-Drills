//  YOUR WORK HERE

function stairs(steps) {
  var widthCount = ["#"];

  for (var i = 0; i < steps; i++) {
    console.log(widthCount.join(""));
    widthCount.push("#", "#");
  }

}


stairs(18);
