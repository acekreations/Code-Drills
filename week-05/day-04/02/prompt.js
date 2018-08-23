// ======== You are given NOTHING to start with 😱 ========

var fs = require ("fs");
var input = process.argv;
input = input.splice(2, input.length);
input = input.join(" ");

fs.readFile("quotes.txt", "utf8", function(err, data){

  if (err) {
    return console.log(err);
  }

  data = data.split(";");

  for (var i = 0; i < data.length; i++) {
    var quote = data[i].split("-");
    if (quote[1] === input) {
      return console.log(quote[0]);
    }
  }
  return console.log("That person never said anything...");
});
