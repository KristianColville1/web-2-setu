

export function getWeatherIcon(weatherCode) {
    return `
        <img src="${weatherCodes[weatherCode].day.image}" 
            alt="${weatherCodes[weatherCode].day.description}" 
            class="m-auto mx-auto" 
            style="width:225px" />
        <p class="mb-3">${weatherCodes[weatherCode].day.description}</p>
    `;
}