$(document).ready(function(){

  $("#submit").on("click", function(){

    event.preventDefault();

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var occupation = $("#occupation").val();
    var city = $("#city").val();
    var state = $("#state").val();

    $("#userData").html("<h1>" + firstName + " " + lastName + "</h1><h2>" + occupation + "</h2><h2>" + city + ", " + state);

    var firstName = $("#firstName").val("");
    var lastName = $("#lastName").val("");
    var occupation = $("#occupation").val("");
    var city = $("#city").val("");
    var state = $("#state").val("");

  })

})
