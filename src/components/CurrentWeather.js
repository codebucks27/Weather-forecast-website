import React, { useState, useEffect } from 'react'

const CurrentWeather = ({city}) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [city])

  return data ? (
    <div>
      {
          (data.cod === 200) && <div>
          <span>
            {new Date(data.dt * 1000).toLocaleTimeString()},{' '}
            {new Date(data.dt * 1000).toDateString()}
          </span>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            width={100}
            height={100}
            alt='weather condition'
          />
          <h1>{data.main.temp}</h1>
          <h2>{data.weather[0].main}</h2>
          <div>
            Humidity: <span>{data.main.humidity}</span>
          </div>
          <div>
            Wind speed: <span>{data.wind.speed} miles/hour</span>
          </div>
          </div>
      }
      {
          (data.cod === "404") && 
          <div>
          <h4>{data.message}</h4>
          </div>
      }
    </div>
  ) : null
}

export default CurrentWeather
