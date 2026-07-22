import React, { useState } from 'react'
import axios from 'axios'
import './style.css'

function Weather() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getWeatherEmoji = (mainCondition) => {
    if (!mainCondition) return '🌡️'
    const condition = mainCondition.toLowerCase()
    if (condition.includes('clear')) return '☀️'
    if (condition.includes('cloud')) return '☁️'
    if (condition.includes('rain')) return '🌧️'
    if (condition.includes('drizzle')) return '🌦️'
    if (condition.includes('thunderstorm')) return '⛈️'
    if (condition.includes('snow')) return '❄️'
    if (condition.includes('mist') || condition.includes('haze') || condition.includes('fog')) return '🌫️'
    return '🌡️'
  }

  async function handleform(e) {
    e.preventDefault()
    if (!city.trim()) return

    setLoading(true)
    setError('')
    setWeather(null)

    try {
      const api = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.trim())}&units=metric&appid=466ddaa21a8de191e9f608bd11a56acb`
      const response = await axios.get(api)
      setWeather(response.data)
    } catch (err) {
      console.error('Error fetching weather:', err)
      if (err.response && err.response.status === 404) {
        setError('City not found. Please try again.')
      } else {
        setError('Failed to fetch weather data. Check your connection.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="weather-page-container">
      <div className="weather-app-card">
        <form className="weather-search-form" onSubmit={handleform}>
          <input 
            type="text" 
            className="weather-input" 
            value={city} 
            onChange={(e) => setCity(e.target.value)} 
            placeholder="Enter city (e.g. New York)" 
            required 
          />
          <button type="submit" className="weather-search-btn">Search</button>
        </form>

        {loading && (
          <div className="weather-loader">
            <div className="weather-spinner"></div>
            <span className="weather-loader-text">Loading weather info...</span>
          </div>
        )}

        {error && (
          <div className="weather-error-card">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        {!weather && !loading && !error && (
          <div className="weather-empty-state">
            <span className="weather-empty-icon">🌤️</span>
            <span className="weather-empty-text">Enter a city to explore local weather info</span>
          </div>
        )}

        {weather && !loading && !error && (
          <div className="weather-display-area">
            <div className="weather-header-info">
              <h2 className="weather-city-name">
                {weather.name}
                <span className="weather-country-code">{weather.sys?.country}</span>
              </h2>
              <span className="weather-condition-tag">
                {weather.weather?.[0]?.description || 'N/A'}
              </span>
            </div>

            <div className="weather-temp-block">
              <span className="weather-large-emoji">
                {getWeatherEmoji(weather.weather?.[0]?.main)}
              </span>
              <h1 className="weather-large-temp">
                {Math.round(weather.main?.temp)}
                <span className="weather-degree-symbol">°C</span>
              </h1>
            </div>

            <div className="weather-stats-grid">
              <div className="weather-stat-card">
                <span className="weather-stat-label">🌡️ Feels Like</span>
                <span className="weather-stat-value">{Math.round(weather.main?.feels_like)}°C</span>
              </div>
              <div className="weather-stat-card">
                <span className="weather-stat-label">💧 Humidity</span>
                <span className="weather-stat-value">{weather.main?.humidity}%</span>
              </div>
              <div className="weather-stat-card">
                <span className="weather-stat-label">💨 Wind Speed</span>
                <span className="weather-stat-value">{weather.wind?.speed} m/s</span>
              </div>
              <div className="weather-stat-card">
                <span className="weather-stat-label">⏲️ Pressure</span>
                <span className="weather-stat-value">{weather.main?.pressure} hPa</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Weather