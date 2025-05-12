
/**
 * 
 * @param {int} index 
 * @returns 
 */
export function getDayName(index) {
    if (index === 0) return "Today";
    if (index === 1) return "Tomorrow";
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const forecastDate = new Date();
    forecastDate.setDate(forecastDate.getDate() + index);
    return daysOfWeek[forecastDate.getDay()];
}