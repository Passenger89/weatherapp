import { cities } from "./cityData.js";
import { countries } from "./countryData.js";
const datalistCities = document.getElementById('cities')
const datalistCountries = document.getElementById('countries')

// Populate datalists 
window.onload = function() {
	let cityOptions = cities.map(city => `<option value="${city.name}">${city.name}</option>`).join('\n');

  datalistCities.innerHTML = cityOptions;
}


// SHOW AND HIDE MODAL
const modalContainer = document.querySelector('.modal-container');
const btnChangeLocation = document.querySelector('.btn-location');
const btnCloseModal = document.querySelector('.modal__btn-close');
const btnSaveChanges = document.querySelector('.modal__btn-submit');


btnChangeLocation.addEventListener('click', () => {
  modalContainer.classList.add('show')
});

btnCloseModal.addEventListener('click', () => {
  modalContainer.classList.remove('show')
});

btnSaveChanges.addEventListener('click', () => {
  modalContainer.classList.remove('show')
});