var request = require("request");
var inq = require("inquirer");


inq.prompt(
  {
    type: "text",
    message: "What city would you like the weather for?",
    name: "city"
  }
).then(function(res){
  var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + res.city + "&units=imperial&appid=2ce829ece096e2eeccfc170aaed61149";

  request(queryURL, function(err, response, body){
    if (err) { console.log(err); }

    body = JSON.parse(body);

    console.log(body.name + ", " + body.sys.country);
    console.log(body.main.temp + "F");

  });
});
