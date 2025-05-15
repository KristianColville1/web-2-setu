import SettingsModel from "../models/SettingsModel.js";
import SettingsView from "../views/SettingsView.js";
import CityFocusModel from "../models/CityFocusModel.js";
export default class SettingsController {
    init(){
        this.model = new SettingsModel();
        this.cities = CityFocusModel.retrieveCitiesListFormatted();
        this.view = new SettingsView(this.cities);
        this.view.renderFavouriteCitySettings(this.model.getFavouriteCitySettings());
        console.log("SettingsController initialized");
    }
}