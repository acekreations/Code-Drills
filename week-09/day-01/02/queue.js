// YOUR WORK HERE

var Queue = function(){
  this.queue = [];
  this.peek = function(){
    return this.queue[0];
  };
  this.add = function(data){
    this.queue.push(data);
  };
  this.remove = function(){
    var firstElem = this.queue[0];
    this.queue.shift();
    return firstElem;
  };
};


var newQueue = new Queue();

newQueue.add("stuff");

console.log(newQueue.peek());
