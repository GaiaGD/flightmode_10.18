

console.log("go back");


$('#flyBack').submit(function(event) {
  event.preventDefault();
  console.log("Go back intro");
  window.location = "intro.html";
});



