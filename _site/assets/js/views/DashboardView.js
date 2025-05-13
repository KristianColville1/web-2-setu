export default class DashboardView {
    init() {
        this.forecastContainer = document.querySelector("#forecastContainer");
    }

    renderDashboard(dailyForecast) {
        this.forecastContainer.innerHTML = dailyForecast
            .map((city) => {
                return `
                <div class="column is-12-mobile is-4-tablet">
                    <a href="/city-focus?city=${city.cityName.toLowerCase()}">
                        <div class="card has-text-black has-text-centered p-3">
                            <h3 class="title">${city.cityName}</h3>
                                <figure class="image is-128x128">
                                    <img src="${
                                        city.weatherCode
                                    }" alt="Weather icon">
                                </figure>
                            <div class="is-flex is-justify-content-space-between mt-3">
                                <div class="column has-text-centered tempNow">
                                ${city.tempNow} °C
                                </div>
                                <div class="column has-text-centered windNow">
                                ${city.windNow} km/h
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
