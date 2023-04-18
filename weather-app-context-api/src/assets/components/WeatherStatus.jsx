
import { useWeather } from '../context/WeatherContext'


function WeatherStatus() {
  const {weather} = useWeather()

  return (
    <>
  
    <div className='weather-status'>
    {
  
      weather ? weather.data.forecast.forecastday.map((day,idx) => {
        return (
            <div key={idx}>
              <h3 className='date'>{day.date}</h3>
              <p>{day.day.condition.text}</p>
              <img src={day.day.condition.icon} alt={day.day.condition.text}/>
              <h3>{day.day.maxtemp_c}°C</h3>
              <h3>{day.day.mintemp_c}°C</h3>
            </div>
          
        )
      }) : <h1>Please select a city.</h1>
    }
    </div>
    

    </>
  )
}



export default WeatherStatus