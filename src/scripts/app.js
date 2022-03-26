import OpenWeatherApi from "./api.js";
import { cityValue, countryValue } from "./modal.js";

const openWeather = new OpenWeatherApi();
const data = openWeather.getData(`${cityValue}`, `${countryValue}`);

const infoContainer = document.querySelector(".info-container");
const details = document.querySelector(".details");

data.then((result) => {
  const celsiusCurrentTemp = Math.round(result.main.temp - 273.15);
  const celsiusFeelsLike = Math.round(result.main["feels_like"] - 273.15);

  // Convert wind direction to compass
  const compassSectors = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'];
  const windDirection = result.wind["deg"];
  // Dividing windDirection by 22.5 (degrees for each sector) to get numbers ranging from 0 to 16
  let index = windDirection % 360;
  index = Math.round(index / 22.5);
  const compassDirection = compassSectors[index]

  // Render weather summary
  infoContainer.innerHTML = `
<h1>${result.name}, ${result.sys.country}</h1>
<h3>${result.weather[0].description}</h3>
<h3>${celsiusCurrentTemp} °C</h3>
<img src="http://openweathermap.org/img/w/${result.weather[0].icon}.png" alt="weather icon">
`;


  // Render table of details
  details.innerHTML = `
  <tr>
  <td>Feels Like</td>
  <td>${celsiusFeelsLike} °C</td>
</tr>
<tr>
  <td>Visibility</td>
  <td>${result.visibility} km</td>
</tr>
<tr>
  <td>Wind Direction</td>
  <td>${compassDirection}</td>
</tr>
<tr>
  <td>Wind Speed</td>
  <td>${result.wind["speed"]} m/s</td>
</tr>

`;
});

//TODO Convert wind degrees to letters. eg.NW, N, SE etc
//TODO Get user city selection from dropdown menu.
// TODO Save results to local storage
// Create modal that allows selection of city/state/country and has close button and save button

