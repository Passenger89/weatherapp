import { cities } from "./cityData.js";
import { countries } from "./countryData.js";


const datalistCities = document.getElementById('cities')
const datalistCountries = document.getElementById('countries')
const inputCities = document.getElementById('input-cities')
const inputCountries = document.getElementById('input-countries')




window.onload = function() {
	let cityOptions = cities.map(city => `<option value="${city.name}">${city.name}</option>`).join('\n');
  let countryOptions = countries.map(country => `<option value="${country.Name}">${country.Name}</option>`).join('\n')

  datalistCities.innerHTML = cityOptions;
  datalistCountries.innerHTML = countryOptions;
}

const cityValue =  inputCities.value
const countryValue = inputCountries.value

export {cityValue, countryValue}