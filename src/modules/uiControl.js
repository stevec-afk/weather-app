import { getWeatherData } from "./weatherData";

const $form = document.getElementById("searchForm");
const $input = document.getElementById("searchInput");

let location = "Halifax";

function updateUI(data) {
    const $conditions = document.getElementById("conditions");
    const $currentTemp = document.getElementById("currentTemp");
    const $feelsLike = document.getElementById("feelslike");
    const $humidity = document.getElementById("humidity");
    const $wind = document.getElementById("wind");

    $conditions.textContent = data.conditions;
    $currentTemp.textContent = `${data.temp} °C`;
    $feelsLike.textContent = `Feels like: ${data.feelsLike} °C`;
    $humidity.textContent = `Humidity: ${data.humidity}%`;
    $wind.textContent = `Wind speed: ${data.wind} km/h`;
    console.log(data);
}

async function init() {
    const data = await getWeatherData(location);
    updateUI(data);
}

$form.addEventListener("submit", async (e) => {
    e.preventDefault();

    location = $input.value;
    if (location) {
        const data = await getWeatherData(location);
        console.log("UI received data:", data);
        updateUI(data);
    }
});

export { init };
