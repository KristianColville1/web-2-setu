/**
 *
 * @param {int} index
 * @returns
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
