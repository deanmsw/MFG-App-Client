import { Component } from 'react';
import axios from 'axios';

import './weather.css';

class Weather extends Component {
  constructor() {
      super();
      this.state = {
        weather: [],
        name: '',
        conditions: '',
        description: '',
        wind: '',
        temp: ''
      };
    }

componentDidMount() {
  // Gets the current a users location
  navigator.geolocation.getCurrentPosition((position) => {
    // console.log("Latitude is :", position.coords.latitude);
    // console.log("Longitude is :", position.coords.longitude);
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    // Call openweathermap API and set location to current users location
    axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&mode=json&units=metric&appid=375b5b72defecfdfccfa090d50f49db4`).then((response) => {

    // Sets the state for the weather api
      const res = response.data;
      this.setState({ weather: res.main, name: res, conditions: res.weather[0].main, description: res.weather[0].description, wind:res.wind.speed, temp: res.main.temp});
    });
  });

 }
//   // const API = '600bea502ab3482b9ad0c8d82c235885' // api key not working

render() {

  return (

    <div className="weather-card">
      <div className="box-content h-60 w-25rem p-4 border-4 ...">
        <h1>Weather in {this.state.name.name} </h1>

        <h3>Main Condition: {this.state.conditions} </h3>
        <h3>Weather Description: {this.state.description} </h3>
        <h3>Temperature: {this.state.temp}℃ </h3>
        <h3>Wind Speed: {this.state.wind }m/s  </h3>
      </div>
    </div>
  )
}
}


export default Weather;
