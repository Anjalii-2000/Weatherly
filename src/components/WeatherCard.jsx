import React from "react";

  // Convert timestamps to readable time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const WeatherCard = ({ weather }) => {
    if (!weather) return null;
  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  
  return (
    <div className="weather-card">
      <div className="card-header">
        <h2>{weather.name}, {weather.sys.country}</h2>
         <img src={iconUrl} alt="weather icon" />
        <p>{weather.weather[0].description.toUpperCase()}</p>
      </div>

      <div className="temp-section">
        <h1>{Math.round(weather.main.temp)}°C</h1>
        <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
      </div>

      <div className="details">
        <div>
          <p> Min: {Math.round(weather.main.temp_min)}°C</p>
          <p> Max: {Math.round(weather.main.temp_max)}°C</p>
        </div>
        <div>
          <p> Humidity: {weather.main.humidity}%</p>
          <p> Wind: {weather.wind.speed} m/s</p>
        </div>
        <div>
          <p> Clouds: {weather.clouds.all}%</p>
          <p>Visibility: {weather.visibility / 1000} km</p>
        </div>
        <div>
          <p> Sunrise: {formatTime(weather.sys.sunrise)}</p>
          <p> Sunset: {formatTime(weather.sys.sunset)}</p>
        </div>
      </div>

      <div className="coordinates">
        <p> Lat: {weather.coord.lat}, Lon: {weather.coord.lon}</p>
      </div>
    </div>
  );
};

export default WeatherCard;