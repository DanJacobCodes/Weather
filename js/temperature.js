var api = require('./../.env').api;

Temperature = function(){
};


Temperature.prototype.getTemperature = function (city, displayHumidity)  {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + api).then(function(response) {
    displayHumidity(city, response.main.humidity);
  }).fail(function(error) {
    $('.showTemperature').text(error.responseJSON.message);
  });
  console.log(JSON.stringify(response));
}

exports.temperatureModule = Temperature;
