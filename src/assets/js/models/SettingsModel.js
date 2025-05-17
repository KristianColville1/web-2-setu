import LocalStorageSerializer from "../utils/LocalStorageSerializer.js";

/**
 * @description Model for managing the user's settings using local storage.
 * @class SettingsModel
 * @property {LocalStorageSerializer} serializer - Serializer for local storage operations.
 * @property {Array} favouriteCityList - List of favourite cities.
 */
export default class SettingsModel {
    /**
     * Initializes the SettingsModel and loads the favourite cities from local storage.
     */
    constructor() {
        this.serializer = new LocalStorageSerializer("favouriteCityList");
        this.favouriteCityList = this.serializer.load() || [];
    }

    /**
     * Returns the list of favourite cities from local storage.
     * @returns {Array} The list of favourite cities.
     */
    getFavouriteCityList() {
        return this.favouriteCityList;
    }

    /**
     * Retrieves all favourite city settings from local storage.
     * @returns {Array} The list of favourite city settings.
     */
    getFavouriteCitySettings() {
        return this.favouriteCityList;
    }

    /**
     * Sets a new list of favourite cities and saves it to local storage.
     * @param {Array} newList - The new list of favourite cities.
     */
    setFavouriteCityList(newList) {
        this.favouriteCityList = newList;
        this.serializer.save(newList);
    }

    /**
     * Adds a city to the list of favourites if it is not already present.
     * Saves the updated list to local storage.
     * @param {string} city - The city to add.
     */
    addFavouriteCity(city) {
        if (!this.favouriteCityList.includes(city)) {
            this.favouriteCityList.push(city);
            this.serializer.save(this.favouriteCityList);
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
        this.serializer.save(this.favouriteCityList);
    }

    /**
     * Clears all favourite cities from the list and local storage.
     */
    clearFavouriteCities() {
        this.favouriteCityList = [];
        this.serializer.clear();
    }
}