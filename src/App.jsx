import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./services/weatherServices";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  // Search function
  const handleSearch = async () => {
    if (!city) return; // prevent empty search
    try {
      setError("");
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError("City not found");
      setWeather(null);
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="app">
      <h1>🌤 Weather App</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress} // <-- listen for Enter
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
