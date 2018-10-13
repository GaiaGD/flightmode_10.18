

console.log("Hi this is Gaia");


// change background
var myHours = new Date();
var myHours = myHours.getHours();
if (myHours >= 5 && myHours <= 9) {
      $("body").addClass("gradient-day");
       $("h1").css('color', '#000000');
       $("h3").css('color', '#000000');

       $("#airlineFlightCode").css('color', '#000000');
       $("#buttonTellMeAboutFlight").css('color', '#000000');
       $("#buttonTellMeAboutFlight").css('border-color', '#000000');
      console.log("dawn");

  } else if (myHours > 9 && myHours <= 15) {
       $("body").addClass("gradient-day");
       $("h1").css('color', '#000000');
       $("h3").css('color', '#000000');
       $("#buttonTellMeAboutFlight").css('color', '#000000');
       $("#buttonTellMeAboutFlight").css('border-color', '#000000');
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
       $("#buttonTellMeAboutFlight").css('color', '#000000');
       $("#buttonTellMeAboutFlight").css('border-color', '#000000');
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
// change background



// CLEAN URL VALUES IMPORTED
var dirtyString = (window.location.search);
console.log(dirtyString);
// var airlineFlightCodePrinted = dirtyString.replace(/[^a-zA-Z ]/g,"");

var FlightNdate = dirtyString.split(/[= &]/);
console.log(FlightNdate);
var Flightcode = FlightNdate[1];
var Flightcode = FlightNdate[1];
Flightcode = Flightcode.toUpperCase();
var Airlinecode = Flightcode.substr(0, 2);
var AirlineNumber = Flightcode.substr(2);
console.log(Airlinecode);
console.log(AirlineNumber);

var FlightDate = FlightNdate[3];
console.log(Flightcode);
console.log(FlightDate);
FlightDate = FlightDate.replace(/%2F/g, '-');
var FlightDayMonthYear = FlightDate.split(/-/);
var FlightDay = FlightDayMonthYear[1];
var FlightMonth = FlightDayMonthYear[0];
var FlightYear = FlightDayMonthYear[2];
    // monthOfFlight = $( "#datepicker" ).val().substr(0, 2);
    // yearOfFlight = $( "#datepicker" ).val().substr(6, 4);
document.getElementById('airlineFlightCodePrinted').innerHTML += Flightcode;
document.getElementById('dateOfFlight').innerHTML += FlightDay +"/"+ FlightMonth +"/"+ FlightYear;
// CLEAN URL VALUES IMPORTED




$( document ).ready(function() {
  data = {appId:"68bf442a",
  appKey:"67fc7c1cb3ae9b97e5fc97c18010104d"}
    // airlineFlightCode = $( "#airlineFlightCode" ).val();
    // airlineCode = $( "#airlineFlightCode" ).val().substr(0, 2).toUpperCase();;
    // inputFlightCode = $( "#airlineFlightCode" ).val().substr(2, 4);
    // // dateOfFlight = $( "#datepicker" ).val().toUpperCase();
    // dayOfFlight = $( "#datepicker" ).val().substr(3, 2);
    // monthOfFlight = $( "#datepicker" ).val().substr(0, 2);
    // yearOfFlight = $( "#datepicker" ).val().substr(6, 4);
    dateOfFlight = FlightYear + "/" + FlightMonth + "/" + FlightDay;
    // departureAirportInTheForm = $( "#departureAirportInTheForm" ).val().toUpperCase();
    utc = "false",
    // airport = departureAirportInTheForm,
    codeType = "IATA",
    dep = dateOfFlight,
    url = "https://api.flightstats.com/flex/flightstatus/rest/v2/jsonp/flight/status/" + Airlinecode +"/" + AirlineNumber + "/dep/" + dep ;



  $.ajax({
  dataType: "jsonp",
  jsonp: "callback",
  url: url,
  data: data,
  success: function(data){

        var movingPlane = function () {
          $(".plane-icon").addClass("plane-icon-moving")
        }

        var airportFetchingAndWeather = function () {
          console.log("im Fetching airports and weather");
            $("#iata-Code").html(data.flightStatuses[0].departureAirportFsCode);
              if (data.flightStatuses[0].departureAirportFsCode === data.appendix.airports[0].iata) {
                $("#airport-name").html(data.appendix.airports[0].name);
                $("#airport-city").html(data.appendix.airports[0].city);
                var latFrom = data.appendix.airports[0].latitude;
                var lonFrom = data.appendix.airports[0].longitude;
                var latTo = data.appendix.airports[1].latitude;
                var lonTo = data.appendix.airports[1].longitude;
                $("#airport-country").html(data.appendix.airports[0].countryName);
                $("#local-time").html(data.appendix.airports[0].localTime);
                $("#airport-name-arrival").html(data.appendix.airports[1].name);   
                $("#airport-city-arrival").html(data.appendix.airports[1].city);
                $("#airport-country-arrival").html(data.appendix.airports[1].countryName);
                $("#local-time-arrival").html(data.appendix.airports[1].localTime);
                var localTimeArrival = data.appendix.airports[1].localTime;
              } else {
                $("#airport-name").html(data.appendix.airports[1].name);
                $("#airport-city").html(data.appendix.airports[1].city);
                var latFrom = data.appendix.airports[1].latitude;
                var lonFrom = data.appendix.airports[1].longitude;
                var latTo = data.appendix.airports[0].latitude;
                var lonTo = data.appendix.airports[0].longitude;
                $("#airport-country").html(data.appendix.airports[1].countryName);
                $("#local-time").html(data.appendix.airports[1].localTime);
                $("#local-time").html(data.appendix.airports[0].localTime);
                $("#airport-name-arrival").html(data.appendix.airports[0].name);   
                $("#airport-city-arrival").html(data.appendix.airports[0].city);
                $("#airport-country-arrival").html(data.appendix.airports[0].countryName);
              }
              $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+latFrom+"&lon="+lonFrom+"&APPID=c9d1645108ea158910af690dc88c1d2e", function(data){
              console.log(data.weather[0].description);

              var temperatureFrom = ((data.main.temp)-273.15).toFixed(1);
                $("#weatherFromTemperature").html(temperatureFrom + "°c");
                $("#weatherFromDescription").html(data.weather[0].description);
                
                if (data.weather[0].main === "Clear") {
                  $('#weatherFromIcon').css("background-image", "url(img/sun.svg)");
                  }
                  else if (data.weather[0].main === "Rain")
                  {
                  $('#weatherFromIcon').css("background-image", "url(img/rain.svg)");
                  }
                  else if (data.weather[0].main === "Clouds")
                  {
                  $('#weatherFromIcon').css("background-image", "url(img/cloud.svg)");
                  }
                })

              $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+latTo+"&lon="+lonTo+"&APPID=c9d1645108ea158910af690dc88c1d2e", function(data){
                  console.log(data.weather[0].description);

                var temperatureTo = ((data.main.temp)-273.15).toFixed(1);
                $("#weatherToTemperature").html(temperatureTo + "°c");
                $("#weatherToDescription").html(data.weather[0].description);

                if (data.weather[0].main === "Clear") {
                  $('#weatherToIcon').css("background-image", "url(img/sun.svg)");
                  }
                  else if (data.weather[0].main === "Rain")
                  {
                  $('#weatherToIcon').css("background-image", "url(img/rain.svg)");
                  }
                  else if (data.weather[0].main === "Clouds")
                  {
                  $('#weatherToIcon').css("background-image", "url(img/cloud.svg)");
                  }
                })
        }

        var aircraftKind = function () {
          console.log("im fetching the kind of plane");
          $("#aircraft").html(data.appendix.equipments[0].name)
        }

        var arrivalAirport = function () {
          console.log("im fetching the arrival airport");
          $("#iata-Code-arrival").html(data.flightStatuses[0].arrivalAirportFsCode)
        }

        var departureTimeHandler = function () {
          var departingTimeWhole = data.flightStatuses[0].departureDate.dateLocal;
          var departingTime = departingTimeWhole.substring(11,16);
          $("#departingTime").html(departingTime)
        }
          
        var arrivalTimeHandler = function () {  var arrivalTimeWhole = data.flightStatuses[0].arrivalDate.dateLocal;
          var arrivalTime = arrivalTimeWhole.substring(11,16);
          console.log(arrivalTime);
          $("#localTimeArrival").html(arrivalTime)
        }

        var departureTerminalHandler = function () {
          var departureTerminal = data.flightStatuses[0].airportResources.departureTerminal;
          console.log(departureTerminal);
          if (departureTerminal !== undefined) {
            $("#terminal-Departure").html("DEPARTURE TERMINAL: " + departureTerminal);
          } else {
            $("#terminal-Departure").html("");
          }
        }

        var departureGateHandler = function () {
          var departureGate = data.flightStatuses[0].airportResources.departureGate;
          console.log(departureGate);
          if (departureGate !== undefined) {
            $("#gate-Departure").html("DEPARTURE GATE: " + departureGate);
          } else {
            $("#gate-Departure").html("");
          }
        }

        var arrivalTerminalHandler = function () {
          var arrivalTerminal = data.flightStatuses[0].airportResources.arrivalTerminal;
          console.log(arrivalTerminal);
          if (arrivalTerminal !== undefined) {
            $("#terminal-Arrival").html("ARRIVAL TERMINAL: " + arrivalTerminal);
          } else {
            $("#terminal-Arrival").html("");
          }
        }

        var arrivalGateHandler = function () {
          var arrivalGate = data.flightStatuses[0].airportResources.arrivalGate;
          console.log(arrivalGate);
          if (arrivalGate !== undefined) {
            $("#gate-Arrival").html("ARRIVAL GATE: " + arrivalGate);
          } else {
            $("#gate-Arrival").html("");
          }
        }

        var delaysDepartureHandler = function () {
          var delaysDeparture = data.flightStatuses[0].delays.departureGateDelayMinutes;
          console.log(delaysDeparture);
          if (delaysDeparture !== undefined) {
            $(".delaysDeparture").html("DEPARTURE DELAYS: ");
            $("#delaysDeparture").html(data.flightStatuses[0].delays.departureGateDelayMinutes + "MIN");
          } else {
            $("#delaysDeparture").html("");
          }
        }

        var delaysArrivalHandler = function () {
            var delaysArrival = data.flightStatuses[0].delays.arrivalGateDelayMinutes;
            console.log(delaysArrival);
            if (delaysArrival !== undefined) {
              $(".delaysArrival").html("ARRIVAL DELAYS: ");
              $("#delaysArrival").html(data.flightStatuses[0].delays.arrivalGateDelayMinutes + "MIN");
            } else {
              $("#delaysArrival").html("");
            }
        }

        var airlinesHandler = function () {
          if (data.flightStatuses[0].carrierFsCode === data.appendix.airlines[0].iata) {
                  //////// BETTER RUN A LOOP /////
            $("#airline").html(data.appendix.airlines[0].name);
          } else if (data.flightStatuses[0].carrierFsCode === data.appendix.airlines[1].iata) {
            $("#airline").html(data.appendix.airlines[1].name);
          } else {
            $("#airline").html(data.appendix.airlines[2].name);
          }

          $("#aircraft").html(data.appendix.equipments[0].name);
        }


        if (data.flightStatuses[0]){

          console.log(Airlinecode);
          var airlineCodeToCheck = data.flightStatuses[0].carrierFsCode;
          console.log(airlineCodeToCheck);

          if (airlineCodeToCheck === Airlinecode){
            console.log("checking if the input is valid");
            movingPlane();
            airportFetchingAndWeather();
            airlinesHandler();
            aircraftKind();

            arrivalAirport();
            departureTimeHandler();
            arrivalTimeHandler();
            departureTerminalHandler();
            departureGateHandler();
            arrivalTerminalHandler();
            arrivalGateHandler();
            delaysDepartureHandler();
            delaysArrivalHandler();

          }




          $("#flyBack").on('click', function(){
               window.location = "intro.html";    
          });




        } else {
          console.log("no!");
          alert("Oops! Something went wrong! Have you entered you details correctly?");
        }


        
      }
    }
  );
});









