import KEY from './apiKey.js'
import { countries } from './countryData.js'

class Weather {
  constructor(city, region) {
    this.appId = KEY
    this.city = city
    this.region = region
    this.limit = 10
  }

  // Returns an object with weather related data of the city passed in
  async getWeather() {
    // Make fetch request to geolocation api for city coordinates
    const geoResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.region}&limit=${this.limit}&appid=${this.appId}`
    )
    const geoResponseData = await geoResponse.json()

    let selectedRegion = geoResponseData.find(
      location => location.state === this.region[0]
    )

    // Extract coordinates from response
    let lat, lon
    if (selectedRegion === undefined) {
    	this.showAlert("Invalid City/Region", "alert")
      // If a region has not been specified (or is not found), return first result
      lat = geoResponseData[0].lat
      lon = geoResponseData[0].lon
    } else {
      // Else return the specified result
      lat = selectedRegion.lat
      lon = selectedRegion.lon
    }

    // Make a second fetch request to weather api with coordinates passed in from previous response
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.appId}`
    )
    const weatherResponseData = await weatherResponse.json()

    return weatherResponseData
  }

  // Change location
  changeLocation(city, region) {
    this.city = city
    this.region = region
  }

  // Save selected location to local storage
  saveToLocalStorage(selectedCity, selectedRegion) {
    const LOCAL_STORAGE_CITY_KEY = 'city'
    const LOCAL_STORAGE_REGION_KEY = 'region'
    let city = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CITY_KEY)) || []
    let region =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_REGION_KEY)) || []
    city === [] ? city.push(selectedCity) : city.splice(0, 1, selectedCity) // If a value already exists, replace it, else push it.
    region === []
      ? region.push(selectedRegion)
      : region.splice(0, 1, selectedRegion)

    localStorage.setItem(LOCAL_STORAGE_CITY_KEY, JSON.stringify(city))
    localStorage.setItem(LOCAL_STORAGE_REGION_KEY, JSON.stringify(region))
  }

  // Get selected location from local storage on page load
  readLocalStorage() {
    const LOCAL_STORAGE_CITY_KEY = 'city'
    const LOCAL_STORAGE_REGION_KEY = 'region'
    let city = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CITY_KEY)) || []
    let region =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_REGION_KEY)) || []

    this.city = city
    this.region = region
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
    const card = document.querySelector('.card')
    // Get info container
    const infoTableContainer = document.querySelector('.info-table-container')
    // Insert alert
    card.insertBefore(div, infoTableContainer)

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
