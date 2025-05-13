/**
 * CityFocusModel.js
 * @description This module defines the CityFocusModel class, which is responsible for managing the weather data for a specific city.
 * It provides methods to initialize the model with city data and retrieve the current weather information.
 * @module CityFocusModel
 * @requires weatherData
 * @requires weatherCodes
 */
export default class CityFocusModel {
    init(cityName) {
        this.cityName = cityName;
        this.currentCityDaily = weatherData[`${cityName}_daily`];
        this.currentCityHourly = weatherData[`${cityName}_hourly`];
    }

    getCityWeather() {
        return {
            cityName: this.cityName,
            time: this.currentCityDaily.time,
            maxTemp: this.currentCityDaily.daily.apparent_temperature_max[0],
            maxWind: this.currentCityDaily.daily.wind_speed_10m_max[0],
            weatherCode: this.currentCityDaily.daily.weather_code[0],
        };
    }

    getCityWeatherHourly() {
        const currentHour = new Date().getUTCHours(); // gets the current hour in utc
        return {
            time: this.currentCityHourly.time,
            hourlyTemp: this.getHourlyTemperature(
                this.currentCityHourly,
                currentHour
            ),
            hourlyWind: this.getHourlyWindSpeed(
                this.currentCityHourly,
                currentHour
            )
        };
    }

    /**
     * Get the current hourly temperature
     * @function getHourlyTemperature
     * @param {Object} data - The weather data object
     * @param {number} timestamp - The chosen time in the format iso8601
     * @returns {string} - The current hourly temperature
     */
    getHourlyTemperature(data, timestamp) {
        // Find the index of the current hour in the api data
        const index = data.hourly.time.findIndex((time) =>
            time.includes(timestamp)
        );
        // Using the index of the current hour, get the temperature
        return index !== -1
            ? `${data.hourly.apparent_temperature[index]}`
            : "N/A";
    }

    /**
     * Get the current hourly wind speed
     * @function getHourlyWindSpeed
     * @param {Object} data - The weather data object
     * @param {number} timestamp - The chosen time in the format iso8601
     * @returns {string} - The current hourly wind speed
     */
    getHourlyWindSpeed(data, timestamp) {
        // Find the index of the current hour in the api data
        const index = data.hourly.time.findIndex((time) =>
            time.includes(timestamp)
        );

        // Using the index of the current hour, get the wind speed
        return index !== -1
            ? `${data.hourly.wind_speed_10m[index]}`
            : "N/A";
    }

    /**
     * Get the daily forecast
     * @function getDailyForecast
     * @param {Object} data - The weather data object
     * @returns {array} - The daily forecast
     */
    getDailyForecast(data) {
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

    /**
     * 
     * @returns {object} - The current city weather data
     */
    getCityAllWeather() {
        const weatherToday = this.getCityWeather();
        const weatherHourly = this.getCityWeatherHourly();
        const dailyForecast = this.getDailyForecast(this.currentCityDaily);
        return { weatherToday, weatherHourly, dailyForecast };
    }
}
