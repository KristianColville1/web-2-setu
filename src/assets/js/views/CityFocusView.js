import {getDayName} from "../utils/date.js";

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
        this.cityName = document.querySelector("#city-name");
        this.maxTemp = document.querySelector("#maxTemp");
        this.maxWind = document.querySelector("#maxWind");
        this.weatherCode = document.querySelector("#weatherCode");
        this.tempNow = document.querySelector("#tempNow");
        this.windNow = document.querySelector("#windNow");
        this.dailyForecastContainer = document.querySelector(
            "#dailyForecastContainer"
        );
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
        this.weatherCode.innerHTML = this.getWeatherIcon(
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
        <div class="column">
            <div class="box mx-4 mb-4 has-text-centered">
                <p class="title is-5">${getDayName(index)}</p>
                <figure class="image is-128x128 m-auto">
                    <img src="${weatherCodes[forecast.weatherCode].day.image}" 
                         alt="${
                             weatherCodes[forecast.weatherCode].day.description
                         }" />
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

    getWeatherIcon(weatherCode) {
        return `
            <img src="${weatherCodes[weatherCode].day.image}" 
                alt="${weatherCodes[weatherCode].day.description}" 
                class="m-auto mx-auto" 
                style="width:225px" />
            <p class="mb-3">${weatherCodes[weatherCode].day.description}</p>
        `;
    }
}
