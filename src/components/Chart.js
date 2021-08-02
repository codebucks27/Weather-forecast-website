import React  from 'react'
import { Line } from 'react-chartjs-2'

import ChartDataLabels from 'chartjs-plugin-datalabels'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  right: 2rem;
  top: 3rem;
  width: 60%;

  @media only screen and (max-width: 640px) {
    width: 100%;
    right: 0;
    top: 25%;

}
@media only screen and (max-width: 380px) {
    
    top: 30%;
      
  }
`
const Title = styled.span`
  color: #808080;
  margin: 0;
  font-size: 1.4rem;
`

const Chart = ({ dataset, val }) => {
  const state = {
    labels: dataset.labels,
    datasets: [
      {
        label: 'Temparature',
        fill: true,
        lineTension: 0.4,
        backgroundColor: 'rgba(85, 150, 246,0.2)',
        borderColor: '#5596F6',
        pointBackgroundColor: '#5596F6',
        borderWidth: 2,
        data: dataset.temp,
      },
    ],
  }

  function customRadius(context) {
    let index = context.dataIndex

    return index === val ? 3 : 0
  }
  return (
    <Container>
      <Title>Temparature</Title>
      <Line
        data={state}
      
        plugins={[ChartDataLabels]}
        options={{
          events: [],
          title: {
            display: false,
          },
          elements: {
            point: {
              radius: customRadius,
              display: true,
            },
          },
          animation: {
            duration: 0,
          },
          layout: {
            padding: {
                left: 10,
                right: 10,
                
               
            }
        },
          plugins: {
            datalabels: {
              display: function (context) {
                var index = context.dataIndex

                return index === val ? true : false
              },
              align: 'end',
              anchor: 'end',
              color: '#5596F6',
              offset: 8,
              font: {
                size: 14,
                weight: 'bold',
              },
            },
            legend: {
              display: false,
            },
          },

          
          scales: {
            x: {
              display: false,
            },
            y: {
              min: 30,
              max: 130,
              display: false,
            },
          },
        }}
      />
    </Container>
  )
}

export default Chart
