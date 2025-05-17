import LocalStorageSerializer from "../utils/LocalStorageSerializer.js";

export default class SettingsModel {
    constructor() {
        this.serializer = new LocalStorageSerializer("favouriteCityList");
        this.favouriteCityList = this.serializer.load() || [];
    }

    /**
     *
     * @returns {Array} - The list of favourite cities from local storage
     */
    getFavouriteCityList() {
        return this.favouriteCityList;
    }

    /**
     * Retrieves all the favourite city settings from local storage
     */
    getFavouriteCitySettings() {
        return this.favouriteCityList;
    }

    setFavouriteCityList(newList) {
        this.favouriteCityList = newList;
        this.serializer.save(newList);
    }

    addFavouriteCity(city) {
        if (!this.favouriteCityList.includes(city)) {
            this.favouriteCityList.push(city);
            this.serializer.save(this.favouriteCityList);
        }
    }

    removeFavouriteCity(city) {
        this.favouriteCityList = this.favouriteCityList.filter(
            (c) => c !== city
        );
        this.serializer.save(this.favouriteCityList);
    }

    clearFavouriteCities() {
        this.favouriteCityList = [];
        this.serializer.clear();
    }
}