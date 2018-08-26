var request = require("request");

var zip = process.argv[2];

var queryURL = "http://api.openweathermap.org/data/2.5/forecast?zip=" + zip + ",us&units=imperial&appid=2ce829ece096e2eeccfc170aaed61149";

request(queryURL, function(err, response, body){
  if (err) { console.log(err); }

  body = JSON.parse(body)
  var threeHourForecast = body.list;
  for (var i = 0; i < threeHourForecast.length; i++) {
    console.log(threeHourForecast[i].dt_txt, threeHourForecast[i].main.temp);
  }

});
