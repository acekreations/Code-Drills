// SERVE UP INDEX AND ADD.HTML IN THIS FILE AT THE PORT OF YOUR CHOICE.
var express = require("express");
var app = express();
var path = require("path");
var PORT = process.env.PORT || 4000;

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/add", function(req, res){
  res.sendFile(path.join(__dirname, "public/add.html"));
});






app.listen(PORT, function(){
  console.log("listengin on port " + PORT);
});
