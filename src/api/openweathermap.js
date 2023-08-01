
export const getCityData = async (city = '') => {
  const key = 'd47c9c31a562417ea50763406991f33d'
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Error fetching weather data:', error);
  });

}
