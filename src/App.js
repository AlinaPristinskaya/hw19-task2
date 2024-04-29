
import React, { useState, useEffect} from 'react';



const API_KEY = 'b2e2a7ebba6d2ec583c86ad6b30bbac4';

function App() {
  const [city, setCity] = useState('');
  const [lat, setLat]=useState('');
  const [lon, setLon]=useState('')
  const [weatherData, setWeatherData] = useState(null);




  const fetchWeatherFindLatLoon = async () => {
    try {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
      const data = await response.json();
      setLat(data[0].lat);
      setLon(data[0].lon);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  // const fetchWeatherData = async () => {
  //   try {
  //     const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API_KEY}`);
  //     const data = await response.json();
  //     console.log(data)
  //   } catch (error) {
  //     console.error('Error fetching weather data:', error);
  //   }
  // };

 

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherFindLatLoon();
  };

  return (
   
   
    

      <div>
      <h1>My Location</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleCityChange}
          />
          <button type="submit">Get Weather</button>
        </form>
      </div>
      // weatherData && (
      //   <div>
      //     <h2>{weatherData.location.name}</h2>
      //     <p>Temperature: {weatherData.current.temp_c}°C</p>
      //     <p>Condition: {weatherData.current.condition.text}</p>
      //     <p>Humidity: {weatherData.current.humidity}%</p>
      //     <p>Wind Speed: {weatherData.current.wind_kph} km/h</p>
      //   </div>
      )
    
  ;
}

export default App;

