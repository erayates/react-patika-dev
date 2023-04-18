import React from 'react'
import WeatherStatus from './WeatherStatus'
import SelectCity from './SelectCity'
import { CityProvider } from '../context/CityContext'
import { WeatherProvider } from '../context/WeatherContext'

function Container() {
  return (
    <WeatherProvider >
      <CityProvider>
          <SelectCity/>
          <WeatherStatus/>
      </CityProvider>
    </WeatherProvider>
  )
}

export default Container