import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
const SmallDetails = styled.span`
  font-size: 0.8rem;
  color: #808080;
  text-align: center;
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
`
const Icon = styled.img`
  width: 100%;
  height: auto;
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

const WeatherCard = ({ data }) => {
  return (
    <Card>
      {new Date().setHours(0, 0, 0, 0) ===
      new Date(data.dt * 1000).setHours(0, 0, 0, 0) ? (
        <SmallDetails>Today</SmallDetails>
      ) : (
        <SmallDetails>
          {new Date(data.dt * 1000)
            .toLocaleString('default', { month: 'long' })
            .slice(0, 3)}{' '}
          &nbsp;
          {new Date(data.dt * 1000).getDay()}
        </SmallDetails>
      )}

      <IconContainer>
        <Icon
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          width={100}
          height={100}
          alt='weather condition'
        />
      </IconContainer>
      <Details>
        Humidity <span>{data.humidity} %</span>
      </Details>
    </Card>
  )
}

export default WeatherCard
