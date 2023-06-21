// JavaScript logic for temperature conversion

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  
  // Function to convert Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  
  // Function to handle form submission
  function handleFormSubmission(event) {
    event.preventDefault();
  
    // Get the input values
    var temperatureInput = document.getElementById('temperatureInput');
    var conversionType = document.getElementById('conversionType');
  
    var temperature = parseFloat(temperatureInput.value);
  
    // Check if the input is valid
    if (isNaN(temperature)) {
      alert('Invalid temperature value!');
      return;
    }
  
    var convertedTemperature;
  
    // Perform the conversion based on the selected option
    if (conversionType.value === 'celsius') {
      convertedTemperature = celsiusToFahrenheit(temperature);
      document.getElementById('conversionResult').innerHTML = temperature + ' degrees Celsius is ' + convertedTemperature + ' degrees Fahrenheit.';
    } else if (conversionType.value === 'fahrenheit') {
      convertedTemperature = fahrenheitToCelsius(temperature);
      document.getElementById('conversionResult').innerHTML = temperature + ' degrees Fahrenheit is ' + convertedTemperature + ' degrees Celsius.';
    }
  }
  
  // Attach the form submission handler
  var temperatureForm = document.getElementById('temperatureForm');
  temperatureForm.addEventListener('submit', handleFormSubmission);
  