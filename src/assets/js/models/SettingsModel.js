

export default class SettingsModel {
    constructor() {
        this.favouriteCityList = JSON.parse(localStorage.getItem("favouriteCityList") || "[]");
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
    getFavouriteCitySettings(){
        return this.favouriteCityList;
    }

}