
  var string = "ilovetowritecode";
  var character = "o"

  function distanceFrom(str, char) {
// ===================== YOUR WORK HERE =====================
// find indices of "o"
// for each index that is not index of "o"
  // find the nearest "o" index and subtract the two
  var charIndices = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] === char) {
      charIndices.push(i);
    }
  }

  var charDiff = [];

  for (var i = 0; i < str.length; i++) {
    var diff = str.length;
    for (var j = 0; j < charIndices.length; j++) {
      var newDiff = Math.abs(i - charIndices[j]);
      if (diff > newDiff) {
        diff = newDiff;
      }
    }
    charDiff.push(diff);
  }

  return charDiff;

// ==========================================================
  }

  console.log(distanceFrom(string, character));
