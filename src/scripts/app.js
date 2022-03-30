import Weather from './weather.js'
import UI from './ui.js'

const weather = new Weather()
const ui = new UI()

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

// Change location event
document.querySelector('.modal__btn-submit').addEventListener('click', e => {
  e.preventDefault()

  const city = document.getElementById('input-cities').value
  const region = document.getElementById('input-regions').value

  weather.changeLocation(city, region)
  weather.saveToLocalStorage(city, region)

  // Get and display weather
  getWeather()
})

function getWeather() {
  weather.readLocalStorage()
  weather
    .getWeather()
    .then(results => ui.render(results))
    .catch(error => console.log(error))
}



// TODO  Error handling - perhaps look into filtering cities based on country?
