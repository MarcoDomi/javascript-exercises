const convertToCelsius = function (farenheit) {
  celsius = ((farenheit - 32) * 5) / 9;
  
  return Number(celsius.toFixed(1));
};

const convertToFahrenheit = function (celsius) {
  farenheit = celsius * (9 / 5) + 32;

  return Number(farenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
