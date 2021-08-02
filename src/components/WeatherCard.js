import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding:1rem;
  border-radius: 20px;
  background-color: ${props => props.active ? '#5596F6' :'transparent'};
  color: ${props => props.active ? '#fff' :'#000'};

  @media only screen and (max-width: 900px) {
  min-width:8rem;
}
`
const SmallDetails = styled.span`
  font-size: 0.8rem;
  
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
 
  span {
    font-size: 1rem;
    font-weight: 500;
  }
`

const WeatherCard = ({ val, data, changeValue, keyprop }) => {
  return (
    <Card active={val === keyprop} onClick={() => changeValue(keyprop)}>
      {new Date().setHours(0, 0, 0, 0) ===
      new Date(data.dt * 1000).setHours(0, 0, 0, 0) ? (
        <SmallDetails>Today</SmallDetails>
      ) : (
        <SmallDetails>
          {new Date(data.dt * 1000)
            .toLocaleString('default', { month: 'long' })
            .slice(0, 3)}{' '}
          &nbsp;
          {new Date(data.dt * 1000).getDate()}
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
