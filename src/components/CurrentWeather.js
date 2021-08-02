import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Forecast from './Forecast'

const WeatherCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 25%;
  border: 1px solid #808080;
  border-radius: 20px;
  padding: 1rem;

    @media only screen and (max-width: 640px) {
    margin:0 auto;
      margin-top:2rem;
  width: 40%;
    
}
@media only screen and (max-width: 380px) {
    
  width: 90%;
    
}
`
const SmallDetails = styled.span`
  font-size: 0.8rem;
  color: #808080;
  text-align: center;
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin: 0;
    font-size: calc(0.8rem + 1vw);
  }
`
const Icon = styled.img`
  width: 100%;
  height: auto;
`

const Condition = styled.h2`
  text-align: center;
  padding-bottom: 0.5rem;
  letter-spacing: 1px;
  margin: 0;
  font-size: calc(0.5rem + 1vw);
`
const Description = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  font-size: 0.8rem;
  color: #808080;
  span {
    font-size: 1rem;
    color: #000;
  }
`

const Error = styled.div`
  color: rgba(255, 0, 0, 0.8);
  text-transform: capitalize;
  text-align: center;
`
const CurrentWeather = ({ city }) => {
  const [data, setData] = useState()

  useEffect(() => {
  
    if (typeof city === 'object') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
      )
        .then((response) => response.json())
        .then((data) => setData(data))
    } 
    else if (typeof city === 'string') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
      )
        .then((response) => response.json())
        .then((data) => setData(data))
    } 
    else {
      alert('Something unexpected happened!')
    }
  }, [city])

  return data ? (
    <div>
      {data.cod === 200 && (
        <div>
          <WeatherCard>
            <SmallDetails>
              {new Date(data.dt * 1000).toLocaleTimeString()},{' '}
              {new Date(data.dt * 1000).toDateString()}
            </SmallDetails>
            <IconContainer>
              <Icon
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                width={150}
                height={150}
                alt='weather condition'
              />
              <h1>
                {parseInt(data.main.temp)}&deg;<sup>F</sup>
              </h1>
            </IconContainer>
            <Condition>{data.weather[0].main}</Condition>
            <Description>
              <Details>
                Humidity <span>{data.main.humidity} %</span>
              </Details>
              <Details>
                Wind speed <span>{data.wind.speed} m/hr</span>
              </Details>
            </Description>
          </WeatherCard>
          <Forecast lat={data.coord.lat} lon={data.coord.lon} />
        </div>
      )}
      {data.cod === '404' && (
        <Error>
          <h4>{data.message}</h4>
        </Error>
      )}
    </div>
  ) : null
}

export default CurrentWeather
