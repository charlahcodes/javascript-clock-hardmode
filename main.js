(function () {

var intervalID = window.setInterval(function displayClock() {
  
  var newDate = new Date();
  var hours = newDate.getHours();
  var minutes = newDate.getMinutes();
  var seconds = newDate.getSeconds();

  var hoursHex = hours.toString(16);
  var minutesHex = minutes.toString(16);
  var secondsHex = seconds.toString(16);

  var time = hoursHex + minutesHex + secondsHex;

  console.log(time);

  var backgroundHex = "#"+time;


  $('#clock').text(time);

  $("body").css("background-color", backgroundHex);

}, 1000);


})();
