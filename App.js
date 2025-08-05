import { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async () => {
    if (!city) return;

    const apiKey = 'c4a8965530863a46ba36e2543d78cb42'; // Replace with your OpenWeatherMap API key
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();
    setWeatherData(data);
  };

  return (
    <div className="app">
      <div className="weather-card">
        <h1>🌤️ Weather App</h1>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Get Weather</button>

        {weatherData && weatherData.main && (
          <div className="weather-info">
            <h2>{weatherData.name}</h2>
            <p>{weatherData.weather[0].main}</p>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
            <h3>{weatherData.main.temp}°C</h3>
            <p>Humidity: {weatherData.main.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
