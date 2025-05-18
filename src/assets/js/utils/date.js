/**
 * @function getDayName
 * @description Returns the name of the day based on the index.
 * @param {int} index
 * @returns {string} - The name of the day based on the index.
 */
export function getDayName(index) {
    if (index === 0) return "Today";
    if (index === 1) return "Tomorrow";
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const forecastDate = new Date();
    forecastDate.setDate(forecastDate.getDate() + index);
    return daysOfWeek[forecastDate.getDay()];
}

/**
 * @function changeBackgroundByDay
 * @description Returns a class name for the background color based on the day.
 * @param {int} index
 * @returns {string} - The class name for the background color based on the day.
 */
export function changeBackgroundByDay(index) {
    const dayName = getDayName(index);
    if (dayName == "Today") {
        return "has-background-primary-light";
    }
    if (dayName == "Tomorrow") {
        return "has-background-info-light";
    }
    if (dayName == "Friday") {
        return "has-background-warning-light";
    }
    if (dayName == "Saturday") {
        return "has-background-danger-light";
    }
    if (dayName == "Sunday") {
        return "has-background-danger-light";
    }
}

/**
 * @function getCurrentHour
 * @description Returns the current hour as an integer.
 * @returns {number} The current hour 0 - 23.
 */
export function getCurrentHour() {
    return new Date().getHours();
}
