/**
 * Returns the HTML for the weather icon and description based on the weather code.
 * @param {string|number} weatherCode - The weather code to look up.
 * @returns {string} - HTML string for the weather icon and description.
 */
export function getWeatherIcon(weatherCode) {
    return `
        <div class="has-text-centered">
            <p class="mb-3 has-text-center">${weatherCodes[weatherCode].day.description}</p>
            <img src="${weatherCodes[weatherCode].day.image}" 
                alt="${weatherCodes[weatherCode].day.description}" 
                class="m-auto mx-auto" 
                style="width:225px" />
        </div>
    `;
}

