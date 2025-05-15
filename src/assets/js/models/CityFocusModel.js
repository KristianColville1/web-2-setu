/**
 * CityFocusModel.js
 * @description Manages weather data for a specific city, providing methods to initialize with city data and retrieve weather information for others.
 * @module CityFocusModel
 * @requires weatherData
 * @requires weatherCodes
 */
export default class CityFocusModel {
    /**
     * Initialize the model with a city name.
     * @param {string} cityName - The name of the city.
     */
    init(cityName) {
        this.cityName = cityName;
        this.cityNameFormatted = CityFocusModel.formatCityName(cityName);
        this.currentCityDaily = weatherData[`${cityName}_daily`];
        this.currentCityHourly = weatherData[`${cityName}_hourly`];
    }

    /**
     * Get todays weather summary for the current city.
     * @returns {Object} Weather summary for today.
     */
    getCityWeather() {
        return {
            cityName: this.cityName,
            time: this.currentCityDaily.time,
            maxTemp: this.currentCityDaily.daily.apparent_temperature_max[0],
            maxWind: this.currentCityDaily.daily.wind_speed_10m_max[0],
            weatherCode: this.currentCityDaily.daily.weather_code[0],
        };
    }

    /**
     * Get the current hours weather for the city.
     * @returns {Object} Hourly weather data.
     */
    getCityWeatherHourly() {
        const formatter = new Intl.DateTimeFormat("en-IE", { // Set the locale to Ireland
            hour: "numeric",
            hour12: false,
            timeZone: "Europe/Dublin",
        });
        const currentHour = parseInt(formatter.format(new Date()), 10);
        return {
            time: this.currentCityHourly.time,
            hourlyTemp: this.getHourlyTemperature(
                this.currentCityHourly,
                currentHour
            ),
            hourlyWind: this.getHourlyWindSpeed(
                this.currentCityHourly,
                currentHour
            ),
        };
    }

    /**
     * Get the temperature for a specific hour.
     * @param {Object} data - The weather data object.
     * @param {number} hour - The hour 0 - 23.
     * @returns {string} The temperature for the hour, or "N/A".
     */
    getHourlyTemperature(data, timestamp) {
        // Find the index of the current hour in the api data
        const index = data.hourly.time.findIndex((time) =>
            time.includes(timestamp)
        );
        return index !== -1
            ? `${data.hourly.apparent_temperature[index]}`
            : "N/A";
    }

    /**
     * Get the wind speed for a specific hour.
     * @param {Object} data - The weather data object.
     * @param {number} hour - The hour 0 - 23.
     * @returns {string} The wind speed for the hour or N/A.
     */
    getHourlyWindSpeed(data, timestamp) {
        // Find the index of the current hour in the api data
        const index = data.hourly.time.findIndex((time) =>
            time.includes(timestamp)
        );
        return index !== -1 ? `${data.hourly.wind_speed_10m[index]}` : "N/A";
    }

    /**
     * Get the daily forecast for a city.
     * @param {Object} data - The weather data object.
     * @returns {Array<Object>} Array of daily forecast objects.
     */
    getDailyForecast(data) {
        return data.daily.time.map((time, idx) => ({
            time,
            temperature: data.daily.apparent_temperature_max[idx],
            windSpeed: data.daily.wind_speed_10m_max[idx],
            weatherCode: data.daily.weather_code[idx],
        }));
    }

    /**
     * Get all weather data for the current city.
     * @returns {Object} Object containing todays, hourly, and daily forecast data.
     */
    getCityAllWeather() {
        return {
            weatherToday: this.getCityWeather(),
            weatherHourly: this.getCityWeatherHourly(),
            dailyForecast: this.getDailyForecast(this.currentCityDaily),
        };
    }

    /**
     * Retrieve a list of city keys from weatherData.
     * @returns {Array<string>} List of city keys.
     */
    static retrieveCitiesList() {
        return Object.keys(weatherData)
            .filter((key) => key.endsWith("_daily"))
            .map((key) => key.replace(/_daily$/, "").toLowerCase());
    }

    /**
     * Retrieve a list of formatted city names.
     * @returns {Array<string>} List of formatted city names.
     */
    static retrieveCitiesListFormatted() {
        return CityFocusModel.retrieveCitiesList().map(
            CityFocusModel.formatCityName
        );
    }

    /**
     * Get the daily weather summary for all cities.
     * @param {Array<string>} citiesList - List of city keys.
     * @returns {Array<Object>} Array of weather summaries for each city.
     */
    retrieveAllCityDailyWeather(citiesList) {
        return citiesList.map((city) => {
            const cityDailyWeather = weatherData[`${city}_daily`];
            return {
                cityName: city,
                cityNameFormatted: CityFocusModel.formatCityName(city),
                maxTemp: cityDailyWeather.daily.apparent_temperature_max[0],
                maxWind: cityDailyWeather.daily.wind_speed_10m_max[0],
                weatherCode: cityDailyWeather.daily.weather_code[0],
            };
        });
    }

    /**
     * Format a city key to a human-readable name.
     * @param {string} city - The city key.
     * @returns {string} Formatted city name.
     */
    static formatCityName(city) {
        if (!city) return "";
        let formatted = city.charAt(0).toUpperCase() + city.slice(1);
        return formatted.replace(/_/g, " ");
    }
}
