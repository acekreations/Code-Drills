// Activity 6

// creating a variable that references our database, so we don't have to type
// it out every time
var database = firebase.database();

// Document.ready shorthand
$(function() {

  // -------------------- Your Code Here --------------------
  database.ref().on("child_added", function(snapshot, key){
      var newChat = $("<p>");
      newChat.text(snapshot.val().chatLog);
      $("#chat-display").append(newChat);
    }, function(errorObject){
      console.log(errorObject);
    });

    $("#chat-submit").on("click", function(){
      event.preventDefault();
      var chatInput = $("#chat-input").val();

      database.ref().push({
        chatLog: chatInput
      });

      $("#chat-input").val("");
  
    });





  // --------------------- End Code Area --------------------

})
