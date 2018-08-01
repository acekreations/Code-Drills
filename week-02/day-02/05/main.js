
var isH;
document.addEventListener('keydown', function(event){
  var key = event.key;

  if (key === "h") {
    isH = confirm("Did you press h?");
    // console.log(isH);
  }

  if (key === "k") {
    if (isH === true) {
      alert("Hello");
    }
    else {
      alert("No thanks");
    }
  }
})
