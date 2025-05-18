import LocalStorageSerializer from "../utils/LocalStorageSerializer.js";
import CityFocusModel from "./CityFocusModel.js";
/**

 * @class SettingsModel
 * @description Model for managing the user's settings using local storage.
 * @property {LocalStorageSerializer} serializer - Serializer for local storage operations.
 */
export default class SettingsModel {
    /**
     * Initializes the SettingsModel and loads the favourite cities from local storage.
     */
    constructor() {
        this.favCitySerializer = new LocalStorageSerializer(
            "favouriteCityList"
        );
        this.weatherSerializer = new LocalStorageSerializer("weatherSettings");

        // Load or initialize favourite cities
        this.favouriteCityList = this.favCitySerializer.load();
        if (
            !Array.isArray(this.favouriteCityList) ||
            this.favouriteCityList.length === 0
        ) {
            this.favouriteCityList = CityFocusModel.retrieveCitiesListFormatted();
            this.favCitySerializer.save(this.favouriteCityList);
        }

        // Load or initialize weather settings
        this.weatherSettings = this.weatherSerializer.load();
        if (
            !Array.isArray(this.weatherSettings) ||
            this.weatherSettings.length === 0
        ) {
            this.weatherSettings = SettingsModel.retrieveWeatherSettings();
            this.weatherSerializer.save(this.weatherSettings);
        }
    }

    /**
     * Retrieves all favourite city settings from local storage.
     * @returns {Array} The list of favourite city settings.
     */
    getFavouriteCitySettings() {
        return this.favouriteCityList;
    }

    /**
     * Returns the list of favourite cities from local storage.
     * @returns {Array} The list of favourite cities.
     */
    getWeatherSettings() {
        // Always return the current settings, which are guaranteed to be set in the constructor
        return this.weatherSettings;
    }

    /**
     * Sets a new list of favourite cities and saves it to local storage.
     * @param {Array} newList - The new list of favourite cities.
     */
    setFavouriteCityList(newList) {
        this.favouriteCityList = newList;
        this.favCitySerializer.save(newList);
    }

    setWeatherSettings(newList) {
        this.weatherSettings = newList;
        this.weatherSerializer.save(newList);
    }

    /**
     * Adds a city to the list of favourites if it is not already present.
     * Saves the updated list to local storage.
     * @param {string} city - The city to add.
     */
    addFavouriteCity(city) {
        if (!this.favouriteCityList.includes(city)) {
            this.favouriteCityList.push(city);
            this.favCitySerializer.save(this.favouriteCityList);
        }
    }

    addWeatherSetting(setting) {
        if (!this.weatherSettings.includes(setting)) {
            this.weatherSettings.push(setting);
            this.weatherSerializer.save(this.weatherSettings);
        }
    }

    /**
     * Removes a city from the list of favourites and updates local storage.
     * @param {string} city - The city to remove.
     */
    removeFavouriteCity(city) {
        this.favouriteCityList = this.favouriteCityList.filter(
            (c) => c !== city
        );
        this.favCitySerializer.save(this.favouriteCityList);
    }

    removeWeatherSetting(setting) {
        this.weatherSettings = this.weatherSettings.filter(
            (s) => s !== setting
        );
        this.weatherSerializer.save(this.weatherSettings);
    }

    /**
     * Clears all favourite cities from the list and local storage.
     */
    clearFavouriteCities() {
        this.favouriteCityList = [];
        this.favCitySerializer.clear();
    }

    static retrieveWeatherSettings() {
        return ["Temperature", "Wind", "Precipitation"];
    }
}
