function convertToFahrenheit(cel) {
  console.log(`${cel} Celsius is ${(cel * 9 / 5)+32} Fahrenheit`);
}


function convertToCelsius(fahrenheit) {
  console.log(`${fahrenheit} Fahrenheit is ${(fahrenheit - 32)*5/9} Celcius`);
}

convertToFahrenheit(30);
convertToCelsius(86);

function convertTemperature(degrees, unit) {
  if (unit === 'C') {
    console.log(`${degrees} Celsius is ${(degrees * 9 / 5)+32} Fahrenheit`);
  } 
  else if (unit === 'F') {
    console.log(`${degrees} Fahrenheit is ${(degrees - 32)*5/9} Celcius`);
  }
}

convertTemperature(25,'C');
convertTemperature(86,'F');
