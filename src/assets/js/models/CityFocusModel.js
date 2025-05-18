import {getCurrentHour} from "../utils/date.js";
/**
 * @class CityFocusModel
 * @description Manages weather data for a specific city, providing methods to initialize with city data and retrieve weather information for others.
 */
export default class CityFocusModel {
    /**
     * @method init
     * @description Initialize the model with a city name.
     * @param {string} cityName - The name of the city.
     */
    init(cityName) {
        this.cityName = cityName;
        this.cityNameFormatted = CityFocusModel.formatCityName(cityName);
        this.currentCityDaily = weatherData[`${cityName}_daily`];
        this.currentCityHourly = weatherData[`${cityName}_hourly`];
    }

    /**
     * @method getCityWeather
     * @description Get today's weather summary for the current city.
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
     * @method getCityWeatherHourly
     * @description Get the current hour's weather for the city.
     * @returns {Object} Hourly weather data.
     */
    getCityWeatherHourly() {
        const currentHour = getCurrentHour();
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
            precipitationProbability: this.getHourlyPrecipitationProbability(
                this.currentCityHourly,
                currentHour
            )
        };
    }

    /**
     * @method getHourlyTemperature
     * @description Get the temperature for a specific hour.
     * @param {Object} data - The weather data object.
     * @param {number} timestamp - The hour 0 - 23.
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
     * @method getHourlyWindSpeed
     * @description Get the wind speed for a specific hour.
     * @param {Object} data - The weather data object.
     * @param {number} timestamp - The hour 0 - 23.
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
     * @method getHourlyPrecipitationProbability
     * @description Get the precipitation probability for a specific hour.
     * @param {Object} data - The weather data object.
     * @param {number} timestamp - The hour 0 - 23.
     * @returns {string} The precipitation probability for the hour or N/A.
     */
    getHourlyPrecipitationProbability(data, timestamp) {
        // Find the index of the current hour in the api data
        const index = data.hourly.time.findIndex((time) =>
            time.includes(timestamp)
        );
        return index !== -1
            ? `${data.hourly.precipitation_probability[index]}`
            : "N/A";
    }

    /**
     * @method getDailyForecast
     * @description Get the daily forecast for a city.
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
     * @method getCityAllWeather
     * @description Get all weather data for the current city.
     * @returns {Object} Object containing today's, hourly, and daily forecast data.
     */
    getCityAllWeather() {
        return {
            weatherToday: this.getCityWeather(),
            weatherHourly: this.getCityWeatherHourly(),
            dailyForecast: this.getDailyForecast(this.currentCityDaily),
        };
    }

    /**
     * @static
     * @method retrieveCitiesList
     * @description Retrieve a list of city keys from weatherData.
     * @returns {Array<string>} List of city keys.
     */
    static retrieveCitiesList() {
        return Object.keys(weatherData)
            .filter((key) => key.endsWith("_daily"))
            .map((key) => key.replace(/_daily$/, "").toLowerCase());
    }

    /**
     * @static
     * @method retrieveCitiesListFormatted
     * @description Retrieve a list of formatted city names.
     * @returns {Array<string>} List of formatted city names.
     */
    static retrieveCitiesListFormatted() {
        return CityFocusModel.retrieveCitiesList().map(
            CityFocusModel.formatCityName
        );
    }

    /**
     * @method retrieveAllCityDailyWeather
     * @description Get the daily weather summary for all cities.
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
     * @method retrieveAllCityDailyWeatherFromFormattedList
     * @description Get the daily weather summary for all cities from a formatted list.
     * @param {Array<string>} citiesList - List of formatted city names.
     * @returns {Array<Object>} Array of weather summaries for each city.
     */
    retrieveAllCityDailyWeatherFromFormattedList(citiesList) {
        console.log("Formatted List: ", citiesList);
        return citiesList.map((city) => {
            const cityKey = city.toLowerCase().replace(/ /g, "_"); // replace spaces with underscores
            const cityDailyWeather = weatherData[`${cityKey}_daily`];
            return {
                cityName: cityKey,
                cityNameFormatted: CityFocusModel.formatCityName(cityKey),
                maxTemp: cityDailyWeather.daily.apparent_temperature_max[0],
                maxWind: cityDailyWeather.daily.wind_speed_10m_max[0],
                weatherCode: cityDailyWeather.daily.weather_code[0],
            };
        });
    }

    /**
     * @static
     * @method formatCityName
     * @description Format a city key to a human-readable name.
     * @param {string} city - The city key.
     * @returns {string} Formatted city name.
     */
    static formatCityName(city) {
        if (!city) return "";
        let formatted = city.charAt(0).toUpperCase() + city.slice(1);
        return formatted.replace(/_/g, " ");
    }

    /**
     * @static
     * @method unFormatCityName
     * @description Convert a formatted city name to a city key.
     * @param {string} city - The formatted city name.
     * @returns {string} City key.
     */
    static unFormatCityName(city) {
        if (!city) return "";
        let formatted = city.charAt(0).toLowerCase() + city.slice(1);
        return formatted.replace(/ /g, "_");
    }
}
