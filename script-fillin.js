function myFunction() {

$(document).ready(function(){
  $('#datepicker').attr("value", Date());
});

}



    dayOfFlight = $( "#datepicker" ).val().substr(0, 2);
    monthOfFlight = $( "#datepicker" ).val().substr(4, 5);
    yearOfFlight = $( "#datepicker" ).val().substr(7, 8, 9, 10);
    dateOfFlight = yearOfFlight + "-" + monthOfFlight + "-" + dayOfFlight;


$(function() {
  $( "#datepicker" ).datepicker({
        dateFormat:'yy mm dd'
        });
});



      var datepicker = $( "#datepicker" );
      var datepickerPosition = datepicker.position();
      var datepickerPositionTop = datepickerPosition.top;
      console.log(datepickerPositionTop);
      var datepickerPositionLeft = datepickerPosition.left + 40;
      console.log(datepickerPositionLeft);
      // $("#ui-datepicker-div").css("top": "datepickerPositionTop", "left": "datepickerPositionleft");

$("#datepicker").datepicker({
    beforeShow: function (input, inst) {
        setTimeout(function () {
            inst.dpDiv.css({
                top: datepickerPositionTop + 20,
                left: datepickerPositionLeft - 20
            });
        }, 0);
    }
});




$('#goToForm').submit(function(event) {
  event.preventDefault();
  console.log("Go to form");
  window.location = "index.html";
});













console.log("Hi this is Gaia");
// change background
var myHours = new Date();
var myHours = myHours.getHours();
if (myHours >= 5 && myHours <= 9) {
      $("body").addClass("gradient-day");
       $("h1").css('color', '#000000');
       $("h3").css('color', '#000000');

       $("#airlineFlightCode").css('color', '#000000');
       $("#buttonGoToForm").css('color', '#000000');
       $("#buttonGoToForm").css('border-color', '#000000');
       $("img").css('border-color', '#000000');
      console.log("dawn");

  } else if (myHours > 9 && myHours <= 15) {
       $("body").addClass("gradient-day");
       $("h1").css('color', '#000000');
       $("h3").css('color', '#000000');
       $("#buttonGoToForm").css('color', '#000000');
       $("#buttonGoToForm").css('border-color', '#000000');
       // $("input#airlineCode").css('color', '#000000');
       $(".airport-group").css('border-bottom', '#000000');
       $("input").addClass('gradientDay');
       $("#mainlogo").css('background-image','url(img/AirplanemodeLogo-black.svg)');
       console.log("day");


     } else if (myHours > 15 && myHours <= 17) {
       $("body").addClass("gradient-evening");
       $("h1").css('color', '#000000');
       $("h2").css('color', '#000000');
       $("h3").css('color', '#000000');
       $(".times").css('color', '#000000');
       $(".wrap").css('border-color', '#000000');
       $(".airportName.Depart").css('color', '#000000');
       $(".airportName.Arrival").css('color', '#000000');
       $("#buttonGoToForm").css('color', '#000000');
       $("#buttonGoToForm").css('border-color', '#000000');
       $(".airplane-details").css('border-color', '#000000');
       $(".itinerary").css('border-color', '#000000');
       $("input#airlineFlightCode").css('color', '#000000');
       $("input#airlineFlightCode").css('border-color', '#000000');
       $("input#departureAirportInTheForm").css('color', '#000000');
       $("input#departureAirportInTheForm").css('border-color', '#000000');
       $("input#datepicker").css('color', '#000000');
       $("input#datepicker").css('border-color', '#000000');
       $(".airport-group").css('border-bottom', '#000000');
       $("input").addClass('gradientDay');
       $("#weatherFromIcon").css('background-image','url(img/sun-black.svg)');
       $(".plane-icon").css('background-image','url(img/plane-icon-black.svg)');
       $("#weatherToIcon").css('background-image','url(img/sun-black.svg)');
       $("#terminal-Departure").css('color', '#000000');
       $("#gate-Departure").css('color', '#000000');
       $("#terminal-Arrival").css('color', '#000000');
       $("#gate-Arrival").css('color', '#000000');
       $("#mainlogo").css('background-image','url(img/AirplanemodeLogo-black.svg)');
       console.log("afternoon");


     } else if (myHours >17 && myHours <= 23) {
       $("body").addClass("gradient-night");
                    console.log("night");

     } else {
       $("body").addClass("gradient-night");
     }
