/**
 * @class ToastNotifier
 * @description A class for creating toast notifications. This class manages the creation and display of toast messages in a container that is appended to the body of the document.
 */
export default class ToastNotifier {
    /**
     * @constructor
     * @description Initializes the ToastNotifier and creates the toast container if it doesn't exist.
     */
    constructor() {
        this._createContainer();
    }

    /**
     * @method _createContainer
     * @description Creates the toast container if it doesn't already exist.
     * @private
     */
    _createContainer() {
        if (!document.querySelector("#toast-container")) {
            const container = document.createElement("div");
            container.id = "toast-container";
            container.className = "toast-container";
            Object.assign(container.style, {
                position: "fixed",
                top: "1rem",
                right: "1rem",
                zIndex: "9999",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
            });
            document.body.appendChild(container);
        }

        this.container = document.querySelector("#toast-container");
    }

    /**
     * @method show
     * @description Shows a toast message.
     * @param {string} message - The message to display.
     * @param {Object} [options] - Additional options.
     * @param {string} [options.type] - Bulma color class.
     * @param {number} [options.duration] - Duration of toast.
     */
    show(message, { type = "is-info", duration = 3000 } = {}) {
        const toast = document.createElement("div");
        toast.className = `notification ${type}`;
        toast.innerHTML = `
            <button class="delete"></button>
            ${message}
        `;

        // Manual dismiss
        toast.querySelector(".delete").addEventListener("click", () => {
            this._removeToast(toast);
        });

        this.container.appendChild(toast);

        // Auto dismiss
        setTimeout(() => this._removeToast(toast), duration);
    }

    /**
     * @method _removeToast
     * @description Removes a toast from the container.
     * @private
     */
    _removeToast(toast) {
        if (toast && this.container.contains(toast)) {
            toast.classList.add("fade-out");
            setTimeout(() => {
                toast.remove();
            }, 300);
        }
    }
}
