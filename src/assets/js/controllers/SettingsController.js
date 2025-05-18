import SettingsModel from "../models/SettingsModel.js";
import SettingsView from "../views/SettingsView.js";
import CityFocusModel from "../models/CityFocusModel.js";
import ToastNotifier from "../utils/ToastNotifier.js";

/**
 * @class SettingsController
 * @description Controller for managing settings related to favourite cities and weather settings.
 */
export default class SettingsController {
    /**
     * @method init
     * @description Initializes the settings controller, model, view, and notifier.
     */
    init() {
        this.model = new SettingsModel();
        this.cities = CityFocusModel.retrieveCitiesListFormatted();
        this.weatherSettings = SettingsModel.retrieveWeatherSettings();
        this.favouriteCities = this.model.getFavouriteCitySettings();
        this.savedWeatherSettings = this.model.getWeatherSettings();
        this.view = new SettingsView();
        this.notifier = new ToastNotifier();

        this.view.renderCitySettings(
            this.cities,
            this.updateFavouriteCitySettings.bind(this)
        );
        this.view.renderWeatherSettings(
            this.weatherSettings,
            this.savedWeatherSettings,
            this.updateWeatherSettings.bind(this)
        );
        this.view.renderFavouriteCitySettings(this.favouriteCities);

        console.log("SettingsController initialized");
    }

    /**
     * @method updateFavouriteCitySettings
     * @description Handles updates to favourite city settings.
     * @param {string} city - The city to update.
     * @param {boolean} isChecked - Whether the city is being added or removed.
     */
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

    /**
     * @method updateWeatherSettings
     * @description Handles updates to weather settings.
     * @param {string} weatherSetting - The weather setting to update.
     * @param {boolean} isChecked - Whether the setting is being enabled or disabled.
     */
    updateWeatherSettings(weatherSetting, isChecked) {
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
