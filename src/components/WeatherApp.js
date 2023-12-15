import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
  // Initial weather data
  const initialWeatherData = { temperature: 25, conditions: "Sunny" };
  const threshold = 20;

  // State to hold weather data
  const [weatherData, setWeatherData] = useState(initialWeatherData);

  useEffect(() => {
    // Update the color of the temperature based on the threshold
    const temperatureElement = document.getElementById("temperature");

    if (weatherData.temperature > threshold) {
      temperatureElement.style.color = "red";
    } else {
      temperatureElement.style.color = "blue";
    }
  }, [weatherData.temperature]); // Run the effect when the temperature changes

  return (
    <div className="weather-container">
      <div className="temperature" id="temperature">
        Temperature: {weatherData.temperature}°C
      </div>
      <div id="conditions">
        Conditions: {weatherData.conditions}
      </div>
    </div>
  );
};

export default WeatherApp;
