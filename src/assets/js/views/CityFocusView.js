import { getDayName, changeBackgroundByDay } from "../utils/date.js";
import { getWeatherIcon } from "../utils/weather_utils.js";

/**
 * CityFocusModel.js
 * @description This module defines the CityFocusModel class, which is responsible for managing the weather data for a specific city.
 * It provides methods to initialize the model with city data and retrieve the current weather information.
 * @module CityFocusModel
 * @requires weatherData
 * @requires weatherCodes
 * 
 */
export default class CityFocusView {

    /**
     * @constructor
     * @description Initializes the CityFocusView class
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
     * 
     * @param {*} todayWeather 
     * @param {*} nowWeather 
     */
    init(todayWeather, nowWeather, dailyForecast) {
        this.renderTodayWeather(todayWeather);
        this.renderTodayWeatherNow(nowWeather);
        this.renderDailyForecast(dailyForecast);
        this.renderPrecipitation(nowWeather);
    }

    /**
     * 
     * @param {*} weatherData 
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
     * 
     * @param {*} hourlyData 
     */
    renderTodayWeatherNow(hourlyData) {
        // Render city hourly weather data
        this.tempNow.innerHTML = `${hourlyData.hourlyTemp} °C`;
        this.windNow.innerHTML = `${hourlyData.hourlyWind} km/h`;
    }

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

    renderPrecipitation(hourlyForecast){
        this.precipitation.innerHTML = hourlyForecast.precipitationProbability + " %";
    }

    addCityName(cityName) {
        this.cityName.innerHTML =
            cityName.charAt(0).toUpperCase() + cityName.slice(1);
    }

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
