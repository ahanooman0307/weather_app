import { getLocationData } from "./WeatherAppAPI";

const getTemperature = async (location) =>  {
    getLocationData(location)
    .then(data => {
    let current = data.current.temp_f;
    
    console.log(current)
    return current;
    
   })

  
    
 }

 export default getTemperature;