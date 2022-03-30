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

  weather.changeLocation(city)
  weather.saveToLocalStorage(city)

  // Get and display weather
  getWeather()
})

function getWeather() {
  weather.readLocalStorage()
  weather
    .getWeather()
    .then(results => ui.render(results))
    .catch(error => { weather.showAlert('City Not Found', 'alert'); console.log(error) })
}