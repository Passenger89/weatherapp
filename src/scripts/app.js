import Weather from './weather.js'
import UI from './ui.js'

const weather = new Weather('Miami', 'United States')
const ui = new UI()

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Change location event
document.querySelector('.modal__btn-submit').addEventListener('click', e => {
  e.preventDefault()

  const city = document.getElementById('input-cities').value
  const country = document.getElementById('input-countries').value

  weather.changeLocation(city, country)

  // Get and display weather
  getWeather()
})

function getWeather() {
  weather
    .getWeather()
    .then(results => ui.render(results))
    .catch(error => console.log(error))
}

// TODO Save results to local storage
// TODO  Finish modal to include labels, update styles, add close button and save button.
// TODO  Error handling - perhaps look into filtering cities based on country?
