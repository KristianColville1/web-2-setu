/**
 * Get the current hourly temperature
 * @function getHourlyTemperature
 * @param {Object} data - The weather data object
 * @param {number} timestamp - The chosen time in the format iso8601
 * @returns {string} - The current hourly temperature
 */
export const getHourlyTemperature = (data, timestamp) => {
    // Find the index of the current hour in the api data
    const index = data.hourly.time.findIndex((time) =>
        time.includes(timestamp)
    );
    // Using the index of the current hour, get the temperature
    return index !== -1
        ? `${data.hourly.apparent_temperature[index]}°C`
        : "N/A";
};


/**
 * Get the current hourly wind speed
 * @function getHourlyWindSpeed
 * @param {Object} data - The weather data object
 * @param {number} timestamp - The chosen time in the format iso8601
 * @returns {string} - The current hourly wind speed
 */
export const getHourlyWindSpeed = (data, timestamp) => {

    // Find the index of the current hour in the api data
    const index = data.hourly.time.findIndex((time) =>
        time.includes(timestamp)
    );

    // Using the index of the current hour, get the wind speed
    return index !== -1
        ? `${data.hourly.wind_speed_10m[index]} km/h`
        : "N/A";
};

/**
 * Get the daily forecast
 * @function getDailyForecast
 * @param {Object} data - The weather data object
 * @returns {array} - The daily forecast
 */
export const getDailyForecast = (data) => {
    const dailyForecast = data.daily.time.map((time, index) => {
        return {
            time: time,
            temperature: data.daily.apparent_temperature_max[index],
            windSpeed: data.daily.wind_speed_10m_max[index],
            weatherCode: data.daily.weather_code[index],
        };
    }); // creates an array of objects with the daily forecast data

    return dailyForecast;
}