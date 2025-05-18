import { getDayName, changeBackgroundByDay } from "../utils/date.js";
import { getWeatherIcon } from "../utils/weather_utils.js";

/**
 * @class CityFocusView
 * @description View for rendering weather data and UI for a specific city, including daily and hourly weather, precipitation, and city name.
 */
export default class CityFocusView {
    /**
     * Sets up the CityFocusView by caching DOM elements for later use.
     */
    constructor() {
        this.cityName = document.querySelector("#cityName");
        this.maxTemp = document.querySelector("#maxTemp");
        this.maxWind = document.querySelector("#maxWind");
        this.weatherCode = document.querySelector("#weatherCode");
        this.tempNow = document.querySelector("#tempNow");
        this.windNow = document.querySelector("#windNow");
        this.dailyForecastContainer = document.querySelector(
            "#dailyForecastContainer"
        );
        this.precipitation= document.querySelector(
            "#precipitation"
        );
        this.maxTempContainer = document.querySelector("#maxTempContainer");
        this.maxWindContainer = document.querySelector("#maxWindContainer");
        this.precipitationContainer = document.querySelector("#precipitationContainer");
    }

    /**
     * Initializes the view with today's weather, current weather, and daily forecast.
     * @param {Object} todayWeather - Weather summary for today.
     * @param {Object} nowWeather - Current hourly weather data.
     * @param {Array<Object>} dailyForecast - Array of daily forecast objects.
     */
    init(todayWeather, nowWeather, dailyForecast) {
        this.renderTodayWeather(todayWeather);
        this.renderTodayWeatherNow(nowWeather);
        this.renderDailyForecast(dailyForecast);
        this.renderPrecipitation(nowWeather);
    }

    /**
     * Renders today's weather data in the UI.
     * @param {Object} weatherData - Weather summary for today.
     */
    renderTodayWeather(weatherData) {
        // Render city daily weather data
        // this.cityName.innerHTML = weatherData.cityName;
        this.maxTemp.innerHTML = `${weatherData.maxTemp} °C`;
        this.maxWind.innerHTML = `${weatherData.maxWind} km/h`;
        this.weatherCode.innerHTML = getWeatherIcon(
            weatherData.weatherCode
        );
    }

    /**
     * Renders the current (hourly) weather data in the UI.
     * @param {Object} hourlyData - Hourly weather data.
     */
    renderTodayWeatherNow(hourlyData) {
        // Render city hourly weather data
        this.tempNow.innerHTML = `${hourlyData.hourlyTemp} °C`;
        this.windNow.innerHTML = `${hourlyData.hourlyWind} km/h`;
    }

    /**
     * Renders the daily weather forecast in the UI.
     * @param {Array<Object>} dailyForecast - Array of daily forecast objects.
     */
    renderDailyForecast(dailyForecast) {
      this.dailyForecastContainer.innerHTML = dailyForecast
            .map((forecast, index) => {
                return `
        <div class="column is-12-mobile is-6-tablet is-4-desktop">
            <div class="box mx-1 mb-4 has-text-centered ${changeBackgroundByDay(index)}">
                <p class="title is-5">${getDayName(index)}</p>
                    <img src="${weatherCodes[forecast.weatherCode].day.image}" 
                         alt="${
                             weatherCodes[forecast.weatherCode].day.description
                         }" width="100"/>
                </figure>
                <div class="is-flex is-justify-content-space-between mt-3">
                    <p class="subtitle is-6">${forecast.temperature}°C</p>
                    <p class="subtitle is-6">${forecast.windSpeed} km/h</p>
                </div>
            </div>
        </div>
        `;
            })
            .join("");
    }

    /**
     * Renders the precipitation probability in the UI.
     * @param {Object} hourlyForecast - Hourly weather data containing precipitation probability.
     */
    renderPrecipitation(hourlyForecast){
        this.precipitation.innerHTML = hourlyForecast.precipitationProbability + " %";
    }

    /**
     * Sets the city name in the UI.
     * @param {string} cityName - The name of the city.
     */
    addCityName(cityName) {
        this.cityName.innerHTML =
            cityName.charAt(0).toUpperCase() + cityName.slice(1);
    }

    /**
     * Shows or hides weather setting containers based on saved settings.
     * @param {Array<string>} settings - List of enabled weather settings.
     */
    showSavedWeatherSettings(settings){
        if(!settings.includes("Temperature")){
            this.maxTempContainer.classList.add("d-none");
        }
        if(!settings.includes("Wind")){
            this.maxWindContainer.classList.add("d-none");
        }
        if(!settings.includes("Precipitation")){
            this.precipitationContainer.classList.add("d-none");
        }
    }
}
