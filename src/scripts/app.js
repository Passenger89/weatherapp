import Weather from "./weather.js";
import UI from "./ui.js";

const weather = new Weather("Miami", "United States");
const ui = new UI();

const data = weather.getWeather();


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
  weather
    .getWeather()
    .then((results) => ui.render(results))
    .catch((error) => console.log(error));
}

// TODO Save results to local storage
// Finish modal to include labels, update styles, add close button and save button.
// Error handling - perhaps look into filtering cities based on country?
