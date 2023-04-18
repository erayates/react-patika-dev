
import { useState,useEffect } from 'react'
import { useCity } from '../context/CityContext'
import { useWeather } from '../context/WeatherContext'

function SelectCity() {
    const {cities} = useCity()
    const {setCity} = useWeather()

    const [selectCity,setSelectCity] = useState('')

    useEffect(() => {
        setCity(selectCity)
    },[selectCity])

    const handleChange = (e) => {
        setSelectCity(e.target.value)
    }
  
    return (
      <div>
        <ul>
          <select name='city' id='city' onChange={handleChange}>
            <option value=''>Select City</option>
            {cities.map((city,idx) => <option value={city} key={idx}>{city}</option>)}
          </select>
        </ul>
      </div>
      
  ) 
}
 
export default SelectCity 