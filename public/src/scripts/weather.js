import { countries } from './countryData.js'

class Weather {
  constructor(city) {
    this.city = city
    this.limit = 1
  }

  // Returns an object with weather related data of the city passed in
  async getWeather() {
    // Make fetch request to geolocation api for city coordinates
    const url = ` /api?q=${this.city}&limit=${this.limit}`

    const res = await fetch(url)
    const data = await res.json()

    return data

    if (data.cod === '404') {
      alert('City not found')
    }
  }

  // Change location
  changeLocation(city) {
    this.city = city
  }

  // Save selected location to local storage
  saveToLocalStorage(selectedCity) {
    const LOCAL_STORAGE_CITY_KEY = 'city'
    let city = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CITY_KEY)) || []
    city === [] ? city.push(selectedCity) : city.splice(0, 1, selectedCity) // If a value already exists, replace it, else push it.
    localStorage.setItem(LOCAL_STORAGE_CITY_KEY, JSON.stringify(city))
    
  }

  // Get selected location from local storage on page load
  readLocalStorage() {
    const LOCAL_STORAGE_CITY_KEY = 'city'
    let city = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CITY_KEY)) || []

    this.city = city
  }

  //   Show alert message
  showAlert(message, className) {
    //   Clear any remaining alerts
    this.clearAlert()
    //   Create div
    const div = document.createElement('div')
    div.className = className
    // Add text
    div.appendChild(document.createTextNode(message))
    // Get parent
    const leftContainer = document.querySelector('.left-container')
    // Get location
    const location = document.querySelector('#location')
    // Insert alert
    leftContainer.insertBefore(div, location)

    // Timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert()
    }, 3000)
  }

  //   Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert')

    if (currentAlert) {
      currentAlert.remove()
    }
  }
}

export default Weather
