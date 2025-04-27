import { getHourlyTemperature, getHourlyWindSpeed, getDailyForecast } from "./utils/data_utils.js";

// city today & hourly data
const currentCity = "berlin";
const currentCityData = weatherData[`${currentCity}_daily`];
const currentCityDataHourly = weatherData[`${currentCity}_hourly`];

// html elements
const time = document.getElementById("time");
const maxTemp = document.getElementById("maxTemp");
const maxWind = document.getElementById("maxWind");
const weatherCodeDescription = document.getElementById("weatherCodeDescription");
const hourlyTemp = document.getElementById("hourlyTemp");
const hourlyWind = document.getElementById("hourlyWind");
const dailyForecastContainer = document.getElementById("dailyForecastContainer");

weatherCodeDescription.classList.add("has-text-centered");

const weatherCode = currentCityData.daily.weather_code[0];
const currentHour = new Date().getUTCHours(); // gets the current hour in utc

// output the data to the html elements
time.innerHTML = currentCityData.daily.time[0];
maxTemp.innerHTML = `${currentCityData.daily.apparent_temperature_max[0]}°C`;
maxWind.innerHTML = `${currentCityData.daily.wind_speed_10m_max[0]} km/h`;

weatherCodeDescription.innerHTML = `
    <img src="${weatherCodes[weatherCode].day.image}" 
         alt="${weatherCodes[weatherCode].day.description}" 
         class="m-auto mx-auto" 
         style="width:200px" />
    <p class="mb-3">${weatherCodes[weatherCode].day.description}</p>
`;

hourlyTemp.innerHTML = getHourlyTemperature(currentCityDataHourly, currentHour);
hourlyWind.innerHTML = getHourlyWindSpeed(currentCityDataHourly, currentHour);


// Function to get the day name
function getDayName(index) {
    if (index === 0) return "Today";
    if (index === 1) return "Tomorrow";
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const forecastDate = new Date();
    forecastDate.setDate(forecastDate.getDate() + index);
    return daysOfWeek[forecastDate.getDay()];
}

const dailyForecast = getDailyForecast(currentCityData);

// Loop through the daily forecast data and create the HTML for each day forecast
dailyForecastContainer.innerHTML = dailyForecast
    .map((forecast, index) => {
        return `
        <div class="column">
            <div class="box mx-4 mb-4 has-text-centered">
                <p class="title is-5">${getDayName(index)}</p>
                <figure class="image is-128x128 m-auto">
                    <img src="${weatherCodes[forecast.weatherCode].day.image}" 
                         alt="${weatherCodes[forecast.weatherCode].day.description}" />
                </figure>
                <div class="is-flex is-justify-content-space-between mt-3">
                    <p class="subtitle is-6">${forecast.temperature}°C</p>
                    <p class="subtitle is-6">${forecast.windSpeed} km/h</p>
                </div>
            </div>
        </div>
        `;
    })
    .join("");
