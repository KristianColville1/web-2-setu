import SettingsModel from "../models/SettingsModel.js";
import SettingsView from "../views/SettingsView.js";
import CityFocusModel from "../models/CityFocusModel.js";
export default class SettingsController {
    init(){
        this.model = new SettingsModel();
        this.cities = CityFocusModel.retrieveCitiesListFormatted();
        this.view = new SettingsView(this.cities, this.updateSettings.bind(this)); // bing the callback to the current context
        this.view.renderFavouriteCitySettings(this.model.getFavouriteCitySettings());
        console.log("SettingsController initialized");
    }

    updateSettings(city, isChecked){
        console.log("Callback worked for SettingsController");
        console.log(`City: ${city}, Checked: ${isChecked}`);
    }
}