import CityFocusModel from "../models/CityFocusModel.js";
import SettingsModel from "../models/SettingsModel.js";
import DashboardView from "../views/DashboardView.js";

/**
 * @class DashboardController
 * @description Controller for the dashboard, managing city data and view toggling.
 */
export default class DashboardController {
    /**
     * @constructor
     * @description Initializes the DashboardController.
     */
    constructor() {
        /** @private */
        this.togglerListener = null;
    }

    /**
     * @method init
     * @description Initializes models, view, and sets up the dashboard.
     */
    init() {
        this.model = new CityFocusModel();
        this.view = new DashboardView();
        this.settingsModel = new SettingsModel();
        this.setupDashboard();
    }

    /**
     * @method setupDashboard
     * @description Sets up the dashboard based on user favourites.
     */
    setupDashboard() {
        if (this.settingsModel.getFavouriteCitySettings().length === 0) {
            this.showAllCities();
        } else {
            this.showFavourites();
        }
        this.setupToggleListeners();
    }

    /**
     * @method showAllCities
     * @description Displays all cities on the dashboard.
     * @param {boolean} withFavouritesToggle - Whether to show the toggle UI.
     */
    showAllCities(withFavouritesToggle = false) {
        const cities = CityFocusModel.retrieveCitiesList();
        const allCityData = this.model.retrieveAllCityDailyWeather(cities);
        this.view.renderDashboard(cities, allCityData);
        if (withFavouritesToggle) {
            this.view.showToggleFavouritesContainer("all");
        } else {
            this.view.hideToggleFavouritesContainer();
        }
    }

    /**
     * @method showFavourites
     * @description Displays only favourite cities on the dashboard.
     */
    showFavourites() {
        const favouriteCities = this.settingsModel.getFavouriteCitySettings();
        const allCityData =
            this.model.retrieveAllCityDailyWeatherFromFormattedList(
                favouriteCities
            );
        this.view.renderDashboard(favouriteCities, allCityData, CityFocusModel.unFormatCityName.bind(this));
        this.view.showToggleFavouritesContainer("favourites");
    }

    /**
     * @method setupToggleListeners
     * @description Sets up event listeners for the toggle buttons.
     */
    setupToggleListeners() {
        this.view.onToggleFavourites(() => {
            this.showFavourites();
        });
        this.view.onToggleAll(() => {
            this.showAllCities(true);
        });
    }
}
