async function getWeatherData(location) {
    const apikey = "TL4AN6Y4T8EBV9QTXYUX9K7ME";
    let response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${apikey}&unitGroup=metric`,
    );
    const weatherData = await response.json();
    console.log(weatherData);
    console.log(parseWeatherData(weatherData));
}

function parseWeatherData(data) {
    const parsedData = {
        conditions: data.currentConditions.conditions,
        temp: data.currentConditions.temp,
        feelsLike: data.currentConditions.feelslike,
        humidity: data.currentConditions.humidity,
        wind: data.currentConditions.wind,
    };
    return parsedData;
}

export { getWeatherData };
