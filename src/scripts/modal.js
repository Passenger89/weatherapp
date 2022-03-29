import { cities } from "./cityData.js";
import { countries } from "./countryData.js";

const datalistCities = document.getElementById('cities')
const datalistCountries = document.getElementById('countries')

const locationForm = document.querySelector('[data-location-form]')

const LOCAL_STORAGE_CITY_KEY = 'city.name';
const LOCAL_STORAGE_COUNTRY_KEY = 'country.name';



window.onload = function() {
	let cityOptions = cities.map(city => `<option value="${city.name}">${city.name}</option>`).join('\n');
  let countryOptions = countries.map(country => `<option value="${country.Name}">${country.Name}</option>`).join('\n')

  datalistCities.innerHTML = cityOptions;
  datalistCountries.innerHTML = countryOptions;
}