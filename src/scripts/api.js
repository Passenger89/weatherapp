import KEY from "./apiKey.js";

class OpenWeatherApi {
	constructor() {
		this.appId = KEY
		this.limit = 1
	}


	// Returns an object with weather related data of the city passed in
	async getData(city, country) {

		// Make fetch request to geolocation api for city coordinates
		const result = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=${this.limit}&appid=${this.appId}`)
		.then(response => response.json())
		.then(data => {
			// Extract coordinates from response
			const lat = data[0].lat
			const lon = data[0].lon

			// Make a second fetch request to weather api with coordinates passed in from previous response
			return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.appId}`)
		})

		.then(response => response.json())
		.catch(err => {
			console.error('Request failed', err)
		})

		console.log(result)
		return result
	}
}


export default OpenWeatherApi