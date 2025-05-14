import CityFocusModel from '../models/CityFocusModel.js';
import DashboardView from '../views/DashboardView.js';
export default class DashboardController {
    init(){
        this.model = new CityFocusModel();
        this.view = new DashboardView();
        this.setupDashboard();
    }

    setupDashboard() {
        const cities = this.model.retrieveCitiesList();
        const allCityData = this.model.retrieveAllCityDailyWeather(cities);

        this.view.renderDashboard(cities, allCityData);
    }


}