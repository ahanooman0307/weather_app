import React, {useRef, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { getLocationData } from './utils/WeatherAppAPI';
import MainScreen from './components/mainscreen';
import FormInput from './components/FormInput';


function App() {

  // const [username, setUsername] = useState("")
  const[currentLocation, setLocation] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target)
    const object = (Object.fromEntries(data.entries()))
    setLocation(object.location)

    console.log('main', object.location)
    
  }
//  useEffect(() => {
  
//   getLocationData(10472)
//   .then(data => {
//     console.log(data)
//   })
//  })

  return (
    <div className="App">
     
      {/* <MainScreen/> */}

      <MainScreen location = {currentLocation}></MainScreen>
      <form onSubmit = {handleSubmit}>
        <FormInput  name = "location" ></FormInput>
        <button>Submit</button>
      </form>

    </div>
  );
}

export default App;
