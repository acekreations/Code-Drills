var fs = require("fs");
var input = process.argv;
var person = "";
var quote = "";

var saidIndex = input.indexOf("said");
var person = input.splice(saidIndex + 1, input.length);
person = person.join(" ");
var quote = input.splice(2, saidIndex - 2);
quote = quote.join(" ");

var content = '"' + quote + '"-' + person + '; ';

fs.appendFile("quotes.txt", content, function(err){
  if (err) {
    console.log(err);
  }
  console.log("Success!");
});
