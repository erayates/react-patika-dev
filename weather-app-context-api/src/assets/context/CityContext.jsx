import { createContext,useContext,useState,useEffect } from "react";
import axios from "axios";

const CityContext = createContext();

export const CityProvider = ({children}) => {
    const [cities, setCities] = useState([])

    useEffect(() => {
         async function fetchCities(){
             const url = 'https://turkiyeapi.cyclic.app/api/v1/provinces';
             await axios(url).then(res => clearCityNames(res.data.data)).catch(err => console.log(err))
         }
         fetchCities()
  
     },[])

    const clearCityNames = (cityNames) => {
      var editedCityNames = cityNames.map(city => city.name)
      
      editedCityNames = editedCityNames.map(city => city.replace(/İ/g,'I').replace(/ı/g,'i').replace(/ğ/g,'g').replace(/ü/g,'u').replace(/ş/g,'s').replace('ö','o').replace('ç','c').replace('Ğ','G').replace('Ü','U').replace('Ş','S').replace('Ö','O').replace('Ç','C'))
  
      setCities(editedCityNames)
     
    }
 
    const values = {
        cities
    }

    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}

export const useCity = () => useContext(CityContext)