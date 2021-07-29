import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import WeatherCard from './WeatherCard'
import Chart from './Chart'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-top: 2rem;
`

const Forecast = ({ lat, lon }) => {
  const [data, setData] = useState()
  const [value, setValue] = useState(0)

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [lat, lon])

  const getData = () => {
    let temp = []
    let labels = []
    data.daily.map((d) => {
      temp.push(parseInt(d.temp.day))
      labels.push(d.dt)
    })

    return { temp, labels }
  }

  const handleValueChange = (v) => {
    setValue(v)
  }

  return (
    <Container>
      {data ? (
        <>
          <Chart val={value} dataset={getData()} />
          {data.daily.map((d, index) => (
            <WeatherCard
              val={value}
              changeValue={handleValueChange}
              key={index}
              keyprop={index}
              data={d}
            />
          ))}
        </>
      ) : null}
    </Container>
  )
}

export default Forecast
