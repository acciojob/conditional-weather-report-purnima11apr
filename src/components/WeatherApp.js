import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
  // Initial weather data
  const initialWeatherData = { temperature: "25°C", conditions: "Sunny" };
  const threshold = "20°C";

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
      <p className="temperature" id="temperature">
        Temperature: {weatherData.temperature}°C
      </p>
      <p id="conditions">
        Conditions: {weatherData.conditions}
      </p>
    </div>
  );
};

export default WeatherApp;
