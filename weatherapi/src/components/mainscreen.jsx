import React, {useState} from 'react';
import { getLocationData } from '../utils/WeatherAppAPI';
import '../styles/main.css'

const MainScreen = ({location}) => {
    

    const getTemperature = async () =>  {
       getLocationData(location)
       .then(data => {
       let current = data.current.temp_c;
       console.log(current)
       
      })
       
    }

    getTemperature()


    
    return(

        <div id = 'main'>
            
            <h1>{location}</h1>
            
           
            

            
        </div>
       

    )
}

export default MainScreen