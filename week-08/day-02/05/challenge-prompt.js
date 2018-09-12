// Spiral iteration through a matrix


// This function takes in a `m` x `n` matrix represented as an array
// of `m` sub-arrays, each of which contain `n` elements and returns
// all the elements of the matrix starting with the element in the
// top left and clockwise spiraling inward
function parim() {

}

function spiralIter(matrix) {
  // -------------------- Your Code Here --------------------
  // top row- matrix[0].length - matrix[0][i]
  // right column- matrix.lenght - matrix[i][matrix[0].length]
  //bottom row -

  //topL = matrix[0][0]
  //topR = matrix[0][matrix[0].length]
  //bottomR = matrix[matrix.length][matrix[0].length]
  //bottomL = matrix[matrix.lenght][0]

  //topL => topR
    //for (martrix[0].length){
    //matrix[0][i]
    //}
  //topR => bottomR
    //for (martrix.length){
    //matrix[i][matrix[0].length
    //}
  //bottomR => bottomL
    //for (i = martrix[0].length, i--){
    //matrix[matrix[matrix.length]][i]
    //}
  //bottomL => topR
    //for (i = martrix.length, i--){
    //matrix[0]][i]
    //}

    var width = matrix[0].length - 1;
    var height = matrix.length - 1;
    console.log("width height; " + width, height);

    var pos = {
      x: 0,
      y: 0
    };

    function top() {
      for (var i = 0; i < width; i++) {
        console.log(matrix[pos.y][pos.x]);
        pos.x++;
      }
      right();
    }

    function right() {
      for (var i = 0; i < height; i++) {
        console.log(matrix[pos.y][pos.x]);
        pos.y++;
      }
      bottom();
    }

    function bottom() {
      for (var i = 0; i < width; i++) {
        console.log(matrix[pos.y][pos.x]);
        pos.x--;
      }
      left();
    }

    function left() {
      for (var i = 0; i < height; i++) {
        console.log(matrix[pos.y][pos.x]);
        pos.y--;
      }
      nextPerimiter();
    }

    function nextPerimiter() {
      if (width > 0 || height > 0) {
        width -= 2;
        height -= 2;
        pos.x++;
        pos.y++;
        top();
      }
      else {
        console.log("all done");
      }
    }

    top();

    // function topRow() {
    //   var i = pos.x;
    //   while (i < width) {
    //     pos.x = i;
    //     console.log(matrix[pos.y][pos.x]);
    //     i++;
    //   }
    //   rightCol();
    // }
    //
    // function rightCol() {
    //   //start on next row
    //   var i = pos.y + 1;
    //   while (i <= height) {
    //     pos.y = i;
    //     console.log(matrix[pos.y][pos.x]);
    //     i++;
    //   }
    //   bottomRow();
    // }
    //
    // function bottomRow() {
    //   //move in a row
    //   var i = width - pos.offset;
    //   while (i >= 0) {
    //     pos.x = i;
    //     console.log(matrix[pos.y][pos.x]);
    //     i--;
    //   }
    //   leftCol();
    // }
    //
    // function leftCol() {
    //   pos.offset = 1;
    //   //move in a row
    //   var i = height - 1;
    //   while (i >= pos.offset) {
    //     pos.y = i;
    //     console.log(matrix[pos.y][pos.x]);
    //     i--;
    //   }
    // }
    //
    // topRow();




  // -------------------- End Code Area ---------------------
}

var matrix = [[ 1,  2,  3,  4,  5],
              [16, 17, 18, 19,  6],
              [15, 24, 25, 20,  7],
              [14, 23, 22, 21,  8],
              [13, 12, 11, 10,  9]];

spiralIter(matrix);

// This export is for testing the function
module.exports = spiralIter;
