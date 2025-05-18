import CityFocusController from "./controllers/CityFocusController.js";
import DashboardController from "./controllers/DashboardController.js";
import SettingsController from "./controllers/SettingsController.js";
import UIController from "./controllers/UIController.js";

/**
 * Main entry point for initializing controllers and UI logic based on the current page.
 */

// Controller instances for each page
const controllers = {
    cityFocus: new CityFocusController(),
    dashboard: new DashboardController(),
    settings: new SettingsController()
};

const uiController = new UIController();

// Listen for DOMContentLoaded and initialize the appropriate controller and UI
document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    const controller = controllers[page];
    if (controller) {
        console.log(`${page.charAt(0).toUpperCase() + page.slice(1)}Controller initialized`);
        controller.init();
    }

    uiController.init();

    // Set the current year in all elements with the class "current-year"
    document.querySelectorAll(".current-year").forEach((el) => {
        el.innerHTML = new Date().getFullYear();
    });
});
