const convertToCelsius = function(farenheitTemp) {
  let result = ((farenheitTemp - 32) * 5/9)
  if (result % 1 !== 0) return Number(result.toFixed(1))
  else return result
};

const convertToFahrenheit = function(celsiusTemp) {
  let result = (celsiusTemp * 9/5 + 32)
  if (result % 1 !== 0) return Number(result.toFixed(1));
  else return result;  
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
