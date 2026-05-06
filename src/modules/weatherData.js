async function getWeatherData(location) {
    const apikey = "TL4AN6Y4T8EBV9QTXYUX9K7ME";
    try {
        let response = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${apikey}&unitGroup=metric&iconSet=icons2`,
        );
        if (!response.ok) {
            console.log("Something went wrong!");
            return;
        }
        const weatherData = await response.json();
        console.log(weatherData);
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
        location: data.resolvedAddress,
        conditions: data.currentConditions.conditions,
        temp: Math.round(data.currentConditions.temp),
        feelsLike: Math.round(data.currentConditions.feelslike),
        humidity: data.currentConditions.humidity,
        wind: data.currentConditions.windspeed,
        icon: data.currentConditions.icon,
    };
    return parsedData;
}

export { getWeatherData };
