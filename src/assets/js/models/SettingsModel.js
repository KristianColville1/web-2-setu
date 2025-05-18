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
        this.hasInitializedSettingsSerializer = new LocalStorageSerializer(
            "hasInitializedSettings"
        );
        this.favCitySerializer = new LocalStorageSerializer(
            "favouriteCityList"
        );
        this.weatherSerializer = new LocalStorageSerializer("weatherSettings");

        // Check if settings have been initialized before
        const hasInitialized = this.hasInitializedSettingsSerializer.load();

        // Load favourite cities and weather settings from storage
        this.favouriteCityList = this.favCitySerializer.load();
        this.weatherSettings = this.weatherSerializer.load();

        if (!hasInitialized) {
            // Set default data if not initialized
            this.favouriteCityList = CityFocusModel.retrieveCitiesListFormatted();
            this.favCitySerializer.save(this.favouriteCityList);

            this.weatherSettings = SettingsModel.retrieveWeatherSettings();
            this.weatherSerializer.save(this.weatherSettings);

            this.hasInitializedSettingsSerializer.save(true);
        } else {
            // If not arrays (corrupted storage), reset to empty arrays
            if (!Array.isArray(this.favouriteCityList)) {
                this.favouriteCityList = [];
                this.favCitySerializer.save(this.favouriteCityList);
            }
            if (!Array.isArray(this.weatherSettings)) {
                this.weatherSettings = [];
                this.weatherSerializer.save(this.weatherSettings);
            }
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

    /**
     * Sets a new list of weather settings and saves it to local storage.
     * @param {Array} newList - The new list of weather settings.
     */
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

    /**
     * Adds a weather setting to the list if it is not already present.
     * Saves the updated list to local storage.
     * @param {string} setting - The weather setting to add.
     */
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

    /**
     * Removes a weather setting from the list and updates local storage.
     * @param {string} setting - The weather setting to remove.
     */
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

    /**
     * Retrieves the default weather settings.
     * @returns {Array} The default weather settings.
     */
    static retrieveWeatherSettings() {
        return ["Temperature", "Wind", "Precipitation"];
    }
}
