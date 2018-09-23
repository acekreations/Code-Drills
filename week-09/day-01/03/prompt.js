var Queue = function(data = []) {

  this.data = data

  this.add = function(record) {
    this.data.push(record)
  }

  this.remove = function() {
   return this.data.shift()
  }

  this.peek = function() {
    return this.data[0]
  }

}
// YOUR WORK HERE

function weave(arg1, arg2) {
  var loopCount;
  if (arg1.data.length > arg2.data.length) {
    loopCount = arg1.data.length;
  }
  else {
    loopCount = arg2.data.length;
  }

  var newArr = [];
  for (var i = 0; i < loopCount; i++) {
    if (arg1.data[i]) {
      newArr.push(arg1.data[i]);
    }
    if (arg2.data[i]) {
      newArr.push(arg2.data[i]);
    }
  }
  return newArr;

}

var queue1 = new Queue([1, 3, 5, 7]);
var queue2 = new Queue([2, 4, 6, 8, 9, 10, 11, 12]);

console.log(weave(queue1, queue2));
