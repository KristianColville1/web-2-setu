import CityFocusModel from "../models/CityFocusModel.js";
import CityFocusView from "../views/CityFocusView.js";
import SettingModel from "../models/SettingsModel.js";

/**
 * @class CityFocusController
 * @description Controller for the city focus page.
 * Handles the interaction between the model and view for displaying city weather data.
 */
export default class CityFocusController {
    /**
     * @constructor
     * @description Initializes the CityFocusController with the city name from URL parameters.
     */
    constructor() {
        const params = new URLSearchParams(window.location.search);
        this.city = params.get("city");
        this.model = new CityFocusModel();
        this.view = new CityFocusView();
        this.settingsModel = new SettingModel();
    }

    /**
     * @method init
     * @description Initializes the controller by setting up the model and view with the city weather data.
     */
    init() {
        this.setupView();
        this.registerViewEventHandlers();
    }

    /**
     * @method setupView
     * @description Sets up the view with the weather data for the specified city.
     */
    setupView() {
        this.model.init(this.city);
        const { weatherToday, weatherHourly, dailyForecast } =
            this.model.getCityAllWeather();
        this.view.init(weatherToday, weatherHourly, dailyForecast);
        this.view.addCityName(this.model.cityNameFormatted);
        this.view.showSavedWeatherSettings(
            this.settingsModel.getWeatherSettings()
        );
    }

    /**
     * @method registerViewEventHandlers
     * @description Registers event handlers for the view.
     */
    registerViewEventHandlers() {
        this.view.listenForEvents();
        this.view.citySwitchEventCallback = this.handleCitySwitch.bind(this);
    }

    /**
     * @method handleCitySwitch
     * @description Handles the event when the user switches cities.
     */
    handleCitySwitch(direction) {
        const cityListKeys = CityFocusModel.retrieveCitiesList();
        const currentIndex = cityListKeys.indexOf(this.city);

        const offset = direction === "left" ? -1 : 1;
        // Uses the modulo operator for circular array traversal.
        const newIndex =
            (currentIndex + offset + cityListKeys.length) % cityListKeys.length; // Ensures the index wraps around

        this.city = cityListKeys[newIndex];
        this.model.init(this.city);
        this.setupView(); // refresh the view with new city data
    }
}
