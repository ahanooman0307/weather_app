export const getLocationData = (location) => {
    return fetch(`http://api.weatherapi.com/v1/current.json?key=7e25a469f521495495d44632230805&q=${location}&aqi=no`)
      .then(res => res.json())
      .then(data => data);
  }