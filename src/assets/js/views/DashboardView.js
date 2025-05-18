import { getWeatherIcon } from "../utils/weather_utils.js";

/**
 * @class DashboardView
 * @description View for rendering the dashboard and handling UI toggles for city weather data.
 */
export default class DashboardView {
    /**
     * @constructor
     * @description Initializes the DashboardView and caches DOM elements.
     */
    constructor() {
        this.forecastContainer = document.querySelector("#forecastContainer");
        this.toggleFavouritesContainer = document.querySelector(
            "#toggleFavouritesContainer"
        );
        this.toggleFavourites = document.querySelector("#toggleFavourites");
        this.toggleAll = document.querySelector("#toggleAll");
    }

    /**
     * @method renderDashboard
     * @description Renders the dashboard with city weather data.
     * @param {string[]} cityNameList - List of city names.
     * @param {Object[]} dailyForecast - List of weather data objects.
     * @param {Function|null} callback - Optional callback for city link formatting.
     */
    renderDashboard(cityNameList, dailyForecast, callback = null) {
        console.log("Rendering Dashboard");
        this.forecastContainer.innerHTML = cityNameList
            .map((city, index) => {
                let name = city;
                
                let key = `${name}_daily`;
                let weatherIcon = getWeatherIcon(dailyForecast[index].weatherCode);
                let nameFormatted = dailyForecast[index].cityNameFormatted;
                let tempNow = dailyForecast[index].maxTemp;
                let windNow = dailyForecast[index].maxWind;


                return `
                <div class="column is-12-mobile is-6-tablet is-4-desktop">
                    <a href="/city-focus?city=${callback === null ? name : callback(name)}" class="has-text-black">
                        <div class="card has-text-black has-text-centered p-3">
                            <h3 class="subtitle">${nameFormatted}</h3>
                                <figure class="image is-128x128 is-flex is-justify-content-centered mx-auto">
                                    ${weatherIcon}
                                </figure>
                            <div class="is-flex is-justify-content-space-between mt-3">
                                <div class="column has-text-centered tempNow">
                                ${tempNow} °C
                                </div>
                                <div class="column has-text-centered windNow">
                                ${windNow} km/h
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `;
            })
            .join("");
    }

    /**
     * @method showToggleFavouritesContainer
     * @description Shows the toggle container and activates the correct toggle.
     * @param {'favourites'|'all'} setting - Which toggle to activate.
     */
    showToggleFavouritesContainer(setting = 'favourites') {
        this.toggleFavouritesContainer.classList.remove("is-invisible");
        this.activateToggler(setting);
    }

    /**
     * @method hideToggleFavouritesContainer
     * @description Hides the toggle container.
     */
    hideToggleFavouritesContainer() {
        this.toggleFavouritesContainer.classList.add("is-invisible");
    }

    /**
     * @method activateToggler
     * @description Activates the correct toggle button.
     * @param {'favourites'|'all'} setting - Which toggle to activate.
     */
    activateToggler(setting = 'favourites') {
        if (setting === 'favourites') {
            this.toggleFavourites.classList.add("is-info");
            this.toggleAll.classList.remove("is-info");
        } else if (setting === 'all') {
            this.toggleFavourites.classList.remove("is-info");
            this.toggleAll.classList.add("is-info");
        }
    }

    /**
     * @method onToggleFavourites
     * @description Registers a callback for the "Favourites" toggle button.
     * @param {Function} callback - Callback function to execute on click.
     */
    onToggleFavourites(callback) {
        this.toggleFavourites.onclick = callback;
    }

    /**
     * @method onToggleAll
     * @description Registers a callback for the "All" toggle button.
     * @param {Function} callback - Callback function to execute on click.
     */
    onToggleAll(callback) {
        this.toggleAll.onclick = callback;
    }
}
