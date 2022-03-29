import compass from "./compass.js";

class UI {
	constructor() {
		this.location = document.getElementById('location')
		this.description = document.getElementById('description')
		this.temperature = document.getElementById('temperature')
		this.icon = document.getElementById('icon')
		this.feelsLike = document.getElementById('feels-like')
		this.visibility = document.getElementById('visibility')
		this.windDirection = document.getElementById('wind-direction')
		this.windSpeed = document.getElementById('wind-speed')
	}

	render(weather) {
		this.location.textContent = `${weather.name}, ${weather.sys.country}`;
		this.description.textContent = weather.weather[0].description;
		this.temperature.textContent = (weather.main.temp - 273.15).toFixed(2) + ' °C';
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
    this.feelsLike.textContent = (weather.main["feels_like"] - 273.15).toFixed(2) + ' °C';
    this.visibility.textContent = weather.visibility;
    this.windDirection.textContent = compass(weather.wind["deg"]);
    this.windSpeed.textContent = weather.wind["speed"];
	}

}

export default UI;