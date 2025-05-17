import SettingsModel from "../models/SettingsModel.js";
import SettingsView from "../views/SettingsView.js";
import CityFocusModel from "../models/CityFocusModel.js";
import ToastNotifier from "../utils/ToastNotifier.js";

export default class SettingsController {
    init() {
        this.model = new SettingsModel();
        this.cities = CityFocusModel.retrieveCitiesListFormatted();
        this.view = new SettingsView(
            this.cities,
            this.updateFavouriteCitySettings.bind(this)
        ); // bing the callback to the current context
        this.notifier = new ToastNotifier();
        this.view.renderFavouriteCitySettings(
            this.model.getFavouriteCitySettings()
        );
        console.log("SettingsController initialized");
    }

    updateFavouriteCitySettings(city, isChecked) {
        if (isChecked) {
            this.model.addFavouriteCity(city);
            this.notifier.show(`${city} added to favourites`, {
                type: "is-success",
            });
        } else {
            this.model.removeFavouriteCity(city);
            this.notifier.show(`${city} removed from favourites`, {
                type: "is-warning",
            });
        }
    }
}
