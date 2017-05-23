var Temperature = require('./../js/temperature.js').temperatureModule;

var displayHumidity = function(city, humidityData) {
  $('.showTemperature').text("The humidity in " + city + " is " + humidityData + "%");
};

$(document).ready(function(){
  var currentTemperatureObject = new Temperature();
  $('#temperature-location').click(function(){
    var city = $('#location').val();
    $('#location').val("");
    currentTemperatureObject.getTemperature(city, displayHumidity);
  });
});
