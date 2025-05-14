import { getWeatherIcon } from "../utils/weather_utils.js";

export default class DashboardView {
    constructor() {
        this.forecastContainer = document.querySelector("#forecastContainer");
    }

    renderDashboard(cityNameList, dailyForecast) {
        console.log("Rendering Dashboard");
        this.forecastContainer.innerHTML = cityNameList
            .map((city, index) => {
                let name = city;
                let nameFormatted =
                    name.charAt(0).toUpperCase() + name.slice(1);
                nameFormatted = nameFormatted.replace(/_/g, " ");
                let key = `${name}_daily`;
                let weatherIcon = getWeatherIcon(dailyForecast[index].weatherCode);

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
}
