import CityFocusController from "./controllers/CityFocusController.js";
import DashboardController from "./controllers/DashboardController.js";
import SettingsController from "./controllers/SettingsController.js";
import UIController from "./controllers/UIController.js"; // <-- add this

// controller imports
const controllers = {
    cityFocus: new CityFocusController(),
    dashboard: new DashboardController(),
    settings: new SettingsController()
}

const uiController = new UIController(); // <-- add this

// listen for DOMContentLoaded event on the document
// and initialize the appropriate controller based on the page
document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    const controller = controllers[page];
    if(controller){
        controller.init();
    }

    uiController.init(); // <-- add this

    // add the current year to all elements with the class "current-year"
    document.querySelectorAll(".current-year").forEach((el) => {
        el.innerHTML = new Date().getFullYear();
    })
});
