const convertToCelsius = function(number) {
  temp = (number - 32) * (5/9)

  let rounded = Math.round(temp * 10) / 10
  return rounded
};

const convertToFahrenheit = function(number) {
  temp = (number * 1.8) + 32

  let rounded = Math.round(temp * 10) / 10
  return rounded
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
