import { getHourlyTemperature, getHourlyWindSpeed } from "./utils/data_utils.js";

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
