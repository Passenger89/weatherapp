import KEY from "./apiKey.js";

class Weather {
	constructor(city, country) {
		this.appId = KEY
		this.city = city
		this.country = country
		this.limit = 1
	}


	// Returns an object with weather related data of the city passed in
	async getWeather() {

		// Make fetch request to geolocation api for city coordinates
		const geoResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${this.city},${this.country}&limit=${this.limit}&appid=${this.appId}`)
		const geoResponseData = await geoResponse.json()
		
		// Extract coordinates from response
		const lat = await geoResponseData[0].lat
		const lon = await geoResponseData[0].lon

		// Make a second fetch request to weather api with coordinates passed in from previous response
		const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.appId}`)
		const weatherResponseData = await weatherResponse.json()

	
		return weatherResponseData;		
		}

		// Change location
		changeLocation(city, country) {
			this.city = city;
			this.country = country;
		}
}


export default Weather