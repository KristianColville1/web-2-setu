import { createToggleHTML, attachToggleListeners } from "../utils/toggleUtils.js";
/**
 * SettingsView handles rendering and updating the settings UI for favourite cities.
 */
export default class SettingsView {
    /**
     * Renders the city settings UI.
     * @param {string[]} cities - List of all available cities.
     * @param {Function} updateCallback - Callback to invoke when settings are updated.
     */
    renderCitySettings(cities, updateCallback) {
        this.cities = cities;
        this.cityUpdateCallback = updateCallback;
        this.favouriteCitiesContainer = document.querySelector(
            "#favouriteCitiesContainer"
        );
    }

    /**
     * Renders the weather settings UI.
     * @param {string[]} availableSettings - List of all available weather settings.
     * @param {string[]} toggledSettings - List of toggled weather settings.
     * @param {Function} updateCallback - Callback to invoke when settings are updated.
     */
    renderWeatherSettings(availableSettings, toggledSettings = [], updateCallback) {
        this.weatherSettings = availableSettings;
        this.toggledWeatherSettings = toggledSettings;
        this.settingsUpdateCallback = updateCallback;
        this.weatherSettingsContainer = document.querySelector(
            "#weatherSettingsContainer"
        );

        this.weatherSettingsContainer.innerHTML = availableSettings
            .map((setting, index) =>
                createToggleHTML({
                    label: setting,
                    id: `weatherSettingToggle${index}`,
                    dataAttr: 'setting',
                    dataValue: setting,
                    isChecked: toggledSettings.includes(setting)
                })
            )
            .join("");

        attachToggleListeners(
            this.weatherSettingsContainer,
            'setting',
            this.settingsUpdateCallback
        );
    }

    /**
     * Renders the settings UI with toggles for each city.
     * @param {string[]} favouriteCities - List of favourite cities to be toggled on.
     */
    renderFavouriteCitySettings(favouriteCities = []) {
        console.log("Rendering Settings");

        if (!Array.isArray(favouriteCities)) {
            favouriteCities = [];
        }

        this.favouriteCitiesContainer.innerHTML = this.cities
            .map((city, index) =>
                createToggleHTML({
                    label: city,
                    id: `cityYesNoToggle${index}`,
                    dataAttr: 'city',
                    dataValue: city,
                    isChecked: favouriteCities.includes(city)
                })
            )
            .join("");

        attachToggleListeners(
            this.favouriteCitiesContainer,
            'city',
            this.cityUpdateCallback
        );
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
}