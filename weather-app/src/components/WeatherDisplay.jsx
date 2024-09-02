import React from 'react';
import './WeatherDisplay.css';

const weatherImages = {
  0: 'sunny.jpg',  
  1: 'cloudy.jpg', 
  2: 'rainy.jpg',  
  3: 'rainy.jpg',  
  4: 'snowy.jpg',  
};

function WeatherDisplay({ weather }) {
  if (!weather) {
    return <div>No weather data available</div>;
  }

  const weatherImage = weatherImages[weather.weathercode] || 'default.jpg';

  return (
    <div className="weather-display" style={{ backgroundImage: `url(/images/${weatherImage})` }}>
      <h1>Current Weather</h1>
      <p>Temperature: {weather.weathercode}°C</p>
    </div>
  );
}

export default WeatherDisplay;
