import { getWeatherIcon } from "../utils/weather_utils.js";

/**
 * View for rendering the dashboard and handling UI toggles.
 */
export default class DashboardView {
    /**
     * Initializes the DashboardView and caches DOM elements.
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
     * Renders the dashboard with city weather data.
     * @param {string[]} cityNameList - List of city names.
     * @param {Object[]} dailyForecast - List of weather data objects.
     */
    renderDashboard(cityNameList, dailyForecast) {
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
                <div class="column is-12-mobile is-4-tablet">
                    <a href="/city-focus?city=${name}">
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
     * Shows the toggle container and activates the correct toggle.
     * @param {'favourites'|'all'} setting - Which toggle to activate.
     */
    showToggleFavouritesContainer(setting = 'favourites') {
        this.toggleFavouritesContainer.classList.remove("is-invisible");
        this.activateToggler(setting);
    }

    /**
     * Hides the toggle container.
     */
    hideToggleFavouritesContainer() {
        this.toggleFavouritesContainer.classList.add("is-invisible");
    }

    /**
     * Activates the correct toggle button.
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
     * Registers a callback for the "Favourites" toggle button.
     * @param {Function} callback
     */
    onToggleFavourites(callback) {
        this.toggleFavourites.onclick = callback;
    }

    /**
     * Registers a callback for the "All" toggle button.
     * @param {Function} callback
     */
    onToggleAll(callback) {
        this.toggleAll.onclick = callback;
    }
}
