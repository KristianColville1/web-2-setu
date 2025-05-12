import CityFocusController from "./controllers/CityFocusController.js";
import DashboardController from "./controllers/DashboardController.js";
import PreferencesController from "./controllers/PreferencesController.js";

// controller imports
const controllers = {
    cityFocus: new CityFocusController(),
    dashboard: new DashboardController(),
    preferences: new PreferencesController()
}

// listen for DOMContentLoaded event on the document
// and initialize the appropriate controller based on the page
document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    const controller = controllers[page];
    if(controller){
        controller.init();
    }
});
