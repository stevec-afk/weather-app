import { getWeatherData } from "./weatherData";

const $form = document.getElementById("search-form");
const $input = document.getElementById("search-input");

let location = "Halifax";

// prettier-ignore
const iconMap = {
    "snow": "wi-snow",
    "snow-showers-day": "wi-day-snow",
    "snow-showers-night": "wi-night-alt-snow",
    "thunder-rain": "wi-thunderstorm",
    "thunder-showers-day": "wi-day-storm-showers",
    "thunder-showers-night": "wi-night-alt-storm-showers",
    "rain": "wi-rain",
    "showers-day": "wi-day-showers",
    "showers-night": "wi-night-alt-showers",
    "fog": "wi-fog",
    "wind": "wi-strong-wind",
    "cloudy": "wi-cloudy",
    "partly-cloudy-day": "wi-day-cloudy",
    "partly-cloudy-night": "wi-night-alt-cloudy",
    "clear-day": "wi-day-sunny",
    "clear-night": "wi-night-clear",
};

function updateUI(data) {
    const $location = document.getElementById("location");
    const $conditions = document.getElementById("conditions");
    const $currentTemp = document.getElementById("current-temp");
    const $feelsLike = document.getElementById("feelslike");
    const $humidity = document.getElementById("humidity");
    const $wind = document.getElementById("wind");

    const $icon = document.getElementById("weather-icon");
    const iconClass = iconMap[data.icon] || "wi-na";
    $icon.className = `wi ${iconClass}`;

    $location.textContent = data.location;
    $conditions.textContent = data.conditions;
    $currentTemp.textContent = `${data.temp} °C`;
    $feelsLike.textContent = `${data.feelsLike} °C`;
    $humidity.textContent = `${data.humidity}%`;
    $wind.textContent = `${data.wind} km/h`;
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
        $input.value = "";
        $input.blur();
        const data = await getWeatherData(location);
        console.log("UI received data:", data);
        updateUI(data);
    }
});

export { init };
