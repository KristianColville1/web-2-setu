/**
 * @function createToggleHTML
 * @description Generates the HTML for a single toggle (city or weather setting).
 * @param {Object} options - Options for the toggle.
 * @param {string} options.label - The label to display.
 * @param {string} options.id - The id for the input.
 * @param {string} options.dataAttr - The data attribute name.
 * @param {string} options.dataValue - The value for the data attribute.
 * @param {boolean} options.isChecked - Whether the toggle should be checked.
 * @returns {string} - The HTML string for the toggle.
 */
export function createToggleHTML({ label, id, dataAttr, dataValue, isChecked = false }) {
    return `
        <div class="is-flex is-align-items-center is-justify-content-space-between mb-2">
            <h6>${label}</h6>
            <div class="toggle-container is-flex is-align-items-center">
                <input id="${id}" data-${dataAttr}="${dataValue}" type="checkbox" name="toggle" class="switch is-rounded is-small is-info" ${
                        isChecked ? "checked" : ""
                    }>
                <label for="${id}"></label>
            </div>
        </div>
    `;
}

/**
 * @function attachToggleListeners
 * @description Attaches change event listeners to all toggles in a container.
 * @param {Element} container - The DOM element containing the toggles.
 * @param {string} dataAttr - The data attribute to read.
 * @param {Function} callback - The callback to invoke on change.
 */
export function attachToggleListeners(container, dataAttr, callback) {
    container
        .querySelectorAll('input[type="checkbox"]')
        .forEach((toggle) => {
            toggle.addEventListener("change", (event) => {
                const value = event.target.dataset[dataAttr];
                const isChecked = event.target.checked; // true or false if checked

                if (typeof callback === "function") {
                    callback(value, isChecked);
                }
            });
        });
}
