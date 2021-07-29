import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import WeatherCard from './WeatherCard';


const Container = styled.div`
display:flex;
justify-content: space-between;
width:100%;
align-items: center;
margin-top:2rem;

`

const Forecast = ({lat,lon}) => {
    const [data, setData] = useState();

    useEffect(() => {
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,minutely,alerts&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [lat,lon]);

    return (
        <Container>
            {
                data ? 

                data.daily.map((d,index) => 
                    <WeatherCard key={index} data={d} />
                    )

                : null
            }
            
        </Container>
    )
}

export default Forecast
