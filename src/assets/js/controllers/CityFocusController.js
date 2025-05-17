import CityFocusModel from "../models/CityFocusModel.js";
import CityFocusView from "../views/CityFocusView.js";

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
    }

    /**
     * @method init
     * @description Initializes the controller by setting up the model and view with the city weather data.
     */
    init() {
        this.model.init(this.city);
        const { weatherToday, weatherHourly, dailyForecast } = this.model.getCityAllWeather();
        this.view.init(weatherToday, weatherHourly, dailyForecast);
        this.view.addCityName(this.model.cityNameFormatted);
    }
}
