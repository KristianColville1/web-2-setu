import SettingsModel from "../models/SettingsModel.js";
import SettingsView from "../views/SettingsView.js";
import CityFocusModel from "../models/CityFocusModel.js";
import ToastNotifier from "../utils/ToastNotifier.js";

/**
 * @class SettingsController
 * @description Controller for managing settings related to favourite cities.
 */
export default class SettingsController {
    init() {
        this.model = new SettingsModel();
        this.cities = CityFocusModel.retrieveCitiesListFormatted();
        this.weatherSettings = SettingsModel.retrieveWeatherSettings();
        this.favouriteCities = this.model.getFavouriteCitySettings();
        this.savedWeatherSettings = this.model.getWeatherSettings();
        this.view = new SettingsView();
        this.view.renderCitySettings(
            this.cities,
            this.updateFavouriteCitySettings.bind(this)
        );
        this.view.renderWeatherSettings(
            this.weatherSettings,
            this.savedWeatherSettings,
            this.updateWeatherSettings.bind(this)
        );
        this.notifier = new ToastNotifier();
        this.view.renderFavouriteCitySettings(
            this.favouriteCities
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

    updateWeatherSettings(weatherSetting, isChecked){
        if (isChecked) {
            this.model.addWeatherSetting(weatherSetting);
            this.notifier.show(`${weatherSetting} setting turned on`, {
                type: "is-success",
            });
        } else {
            this.model.removeWeatherSetting(weatherSetting);
            this.notifier.show(`${weatherSetting} setting turned off`, {
                type: "is-warning",
            });
        }
    }
}
