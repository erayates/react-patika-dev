import { useEffect,useContext,createContext,useState } from "react";

import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({children}) => {
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)
    console.log(city)
    useEffect(() => {
        if(city !== ''){
            fetchData();
        }else{
            setWeather(null)
        }
     
    },[city])

    const fetchData = async () => {
        const url = `${import.meta.env.VITE_MAIN_URL}/forecast.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&days=7&aqi=no&alerts=no`;
        await axios(url).then(res => setWeather(res)).catch(err => console.log(err))

    }

    const values = {
        city,
        setCity,
        weather
    }

    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}

export const useWeather = () => useContext(WeatherContext)