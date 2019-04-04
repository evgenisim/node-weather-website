const request = require('request');



const forecast = (lat, lng, callback) => {
  const url = `https://api.darksky.net/forecast/4182996366b36284abff094283e580bb/${lat},${lng}?units=si`;

  request({
    url,
    json: true
  }, (erorr, {
    body
  }) => {
    if (erorr) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain. Humidity is ${body.daily.data[0].humidity} and the wind speed is ${body.daily.data[0].windSpeed}. The maximum temperature is ${body.daily.data[0].temperatureHigh} and the minimum is ${body.daily.data[0].temperatureLow}`)
    }
  })
}

module.exports = forecast;