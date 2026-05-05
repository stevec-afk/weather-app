async function getWeatherData(location) {
    const apikey = "TL4AN6Y4T8EBV9QTXYUX9K7ME";
    try {
        let response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${apikey}&unitGroup=metric`,
        );
        if (!response.ok) {
            console.log("Something went wrong!");
            return;
        }
        const weatherData = await response.json();
        const parsedData = parseWeatherData(weatherData);
        return parsedData;
    } catch (error) {
        console.error("Caught an error:", error);
    } finally {
        console.log("API reqeuest complete.");
    }
}

function parseWeatherData(data) {
    const parsedData = {
        conditions: data.currentConditions.conditions,
        temp: data.currentConditions.temp,
        feelsLike: data.currentConditions.feelslike,
        humidity: data.currentConditions.humidity,
        wind: data.currentConditions.windspeed,
    };
    return parsedData;
}

export { getWeatherData };
