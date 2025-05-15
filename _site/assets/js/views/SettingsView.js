/**
 * SettingsView handles rendering and updating the settings UI for favourite cities.
 */
export default class SettingsView {
    /**
     * @param {string[]} cities - List of all available cities.
     * @param {Function} updateCallback - Callback to invoke when settings are updated.
     */
    constructor(cities, updateCallback) {
        this.cities = cities;
        this.updateCallback = updateCallback;
        this.favouriteCitiesContainer = document.querySelector("#favouriteCitiesContainer");
        console.log("SettingsView initialized");
    }

    /**
     * Renders the settings UI with toggles for each city.
     * @param {string[]} favouriteCities - List of favourite cities to be toggled on.
     */
    renderFavouriteCitySettings(favouriteCities = []) {
        console.log("Rendering Settings");
    
        if (!Array.isArray(favouriteCities)) {
            favouriteCities = []; // Ensure favouriteCities is always an array - might break if not
        }

        this.favouriteCitiesContainer.innerHTML = this.cities
            .map((city, index) => this._createCityToggleHTML(city, index, favouriteCities.includes(city)))
            .join("");
    }

    /**
     * Updates the toggles to reflect the current favourite cities.
     * @param {string[]} favouriteCities - List of favourite cities to be toggled on.
     */
    toggleFavouriteCities(favouriteCities) {
        if (!Array.isArray(favouriteCities)) {
            favouriteCities = [];
        }
        this.cities.forEach((city, index) => {
            const toggle = document.querySelector(`#cityYesNoToggle${index}`);
            if (toggle) {
                toggle.checked = favouriteCities.includes(city);
            }
        });
    }

    /**
     * Generates the HTML for a single city toggle.
     * @private
     * @param {string} city - The city name.
     * @param {number} index - The index of the city in the list.
     * @param {boolean} isChecked - Whether the toggle should be checked.
     * @returns {string} - The HTML string for the city toggle.
     */
    _createCityToggleHTML(city, index, isChecked = false) {
        return `
            <div class="is-flex is-align-items-center is-justify-content-space-between mb-2">
                <h6>${city}</h6>
                <div class="toggle-container">
                    <input id="cityYesNoToggle${index}" data-city="${city}" type="checkbox" name="toggle" class="switch is-rounded is-small is-info" ${isChecked ? "checked" : ""}>
                    <label for="cityYesNoToggle${index}"></label>
                </div>
            </div>
        `;
    }


}