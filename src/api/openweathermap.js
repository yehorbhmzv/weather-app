
export const getCityData = (city = '') => {
  const key = 'd47c9c31a562417ea50763406991f33d'
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
  .then(response => response.json())
  .then(data => {
    return data
  })
  .catch(error => {
    return null
  });

}
